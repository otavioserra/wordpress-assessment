<?php

if ( ! class_exists( 'Admin_Page' ) ) {
	class Admin_Page {

		public function __construct() {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
			add_action( 'rest_api_init', array( $this, 'register_routes' ) );
		}

		public function enqueue_scripts( $hook ) {
			if ( 'toplevel_page_otavio_serra_admin' !== $hook ) {
				return;
			}

			wp_enqueue_style( 'otavio-serra-plugin-admin', OS_URL . 'pages/css/admin.css', array(), ( OS_DEBUG ? filemtime( OS_PATH . 'pages/css/admin.css' ) : OS_VERSION ) );
			wp_enqueue_script( 'otavio-serra-plugin-admin', OS_URL . 'pages/js/admin.js', array( 'jquery', 'wp-api-fetch' ), ( OS_DEBUG ? filemtime( OS_PATH . 'pages/js/admin.js' ) : OS_VERSION ), true );

			wp_localize_script(
				'otavio-serra-plugin-admin',
				'otavioSerraAdminData',
				array(
					'apiUrl' => rest_url( 'otavio-serra/v1/gravatar-info' ),
					'nonce'  => wp_create_nonce( 'wp_rest' ),
				)
			);
		}

		public function register_routes() {
			register_rest_route(
				'otavio-serra/v1',
				'/gravatar-info/(?P<id>\d+)',
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'ajax_additional_information' ),
					'permission_callback' => function () {
						return current_user_can( 'manage_options' );
					},
					'args'                => array(
                        'id' => array(
                            'required'          => true,
                            'validate_callback' => function($param, $request, $key){
                                return is_numeric( $param );
                            },
                            'sanitize_callback' => 'absint',
                        ),
                    ),
				)
			);
		}

		public function ajax_additional_information( WP_REST_Request $request ) {
            // Get the ID from the request parameters
            $submission_id = $request->get_param( 'id' );

            if ( empty( $submission_id ) ) {
                 return new WP_Error( 'missing_id', __( 'Submission ID is required.', 'otavio-serra-plugin' ), array( 'status' => 400 ) );
            }

            // Get the email from the database using the ID
            global $wpdb;
            $table_name = $wpdb->prefix . 'wa_form_submissions';
            $email = $wpdb->get_var( $wpdb->prepare(
                "SELECT email FROM {$table_name} WHERE id_wa_form_submissions = %d",
                $submission_id
            ) );

            // Check if email was found
            if ( is_null( $email ) ) {
                return new WP_Error( 'submission_not_found', __( 'Submission not found.', 'otavio-serra-plugin' ), array( 'status' => 404 ) );
            }

            // Construct the Gravatar URL (JSON profile).
            $email_hash = md5( strtolower( trim( $email ) ) );
            $gravatar_url = "https://www.gravatar.com/$email_hash.json";

            // Make the request.
            $response = wp_remote_get( $gravatar_url );

            // Handle errors.
            if ( is_wp_error( $response ) ) {
                error_log( 'Gravatar API Error: ' . $response->get_error_message() ); // Log the error
                return new WP_Error( 'gravatar_error', __( 'Error fetching Gravatar data.', 'otavio-serra-plugin' ), array( 'status' => 500 ) );
            }

            // Get the response body and decode JSON.
            $body = wp_remote_retrieve_body( $response );
            $data = wp_json_decode( $body, true );

            if ( empty( $data ) || ! isset( $data['entry'] ) || ! is_array( $data['entry'] ) ) {
                return new WP_Error( 'gravatar_no_data', __( 'No Gravatar data found for this email.', 'otavio-serra-plugin' ), array( 'status' => 404 ) );
            }

            // Extract relevant data (example - customize this!)
            $gravatar_data = array(
                'thumbnailUrl' => $data['entry'][0]['thumbnailUrl'] ?? '', // Use null coalescing operator
                'displayName'  => $data['entry'][0]['displayName'] ?? '',
                'aboutMe'      => $data['entry'][0]['aboutMe'] ?? '',
                'profileUrl'   => $data['entry'][0]['profileUrl'] ?? '',
                // Add other fields as needed.
            );

            // Return the data.
            return rest_ensure_response( $gravatar_data );
		}

        public function page() {
            if ( ! current_user_can( 'manage_options' ) ) {
                return;
            }

            global $wpdb;
            $table_name = $wpdb->prefix . 'wa_form_submissions';
            $form_submissions = $wpdb->get_results(
                "SELECT * FROM {$table_name} ORDER BY date_creation DESC",
                ARRAY_A
            );

            $view_data = array(
                'flag_registers_founded' => !empty($form_submissions),
                'form_submissions'      => $form_submissions,
            );

            require OS_PATH . 'views/view.admin-page.php';
        }
	}
}