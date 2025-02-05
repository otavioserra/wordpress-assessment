<?php

if ( ! class_exists( 'Block_Controller' ) ) {
	class Block_Controller {

		public function __construct() {
			add_action(
				'rest_api_init',
				function () {
					register_rest_route(
						'otavio-serra/v1',
						'/settings',
						array(
							'methods'  => WP_REST_Server::READABLE,
							'callback' => function () {
                                return [
                                    'root' => rest_url('wp/v2/'),
                                    'nonce' => wp_create_nonce('wp_rest'),
                                ];
                            },
                            'permission_callback' => '__return_true',
						)
					);

					register_rest_route(
						'otavio-serra/v1',
						'/languages-frameworks',
						array(
							'methods'  => WP_REST_Server::READABLE,
							'callback' => array( $this, 'ajax_languages_and_frameworks' ),
                            'permission_callback' => '__return_true',
						)
					);

					register_rest_route(
						'otavio-serra/v1',
						'/submit-form',
						array(
							'methods'  => WP_REST_Server::CREATEABLE,
							'callback' => array( $this, 'ajax_handle_form_submission' ),
                            'permission_callback' => '__return_true',
						)
					);
				}
			);
		}

        public function ajax_languages_and_frameworks( WP_REST_Request $request ) {
            // Retrieve the nonce from the header
            $nonce = $request->get_header( 'X-WP-Nonce' );

            // Verify the nonce
            if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) { // 'wp_rest' is the nonce action
                return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
            }

            // Get languages and frameworks from the database.
			global $wpdb;
			$query = "
                SELECT l.language_name, l.id_language, f.framework_name
                FROM {$wpdb->prefix}wa_languages AS l
                LEFT JOIN {$wpdb->prefix}wa_frameworks AS f ON l.id_language = f.id_language
                ORDER BY l.language_name ASC, f.framework_name ASC";

            $results = $wpdb->get_results( $query, ARRAY_A );

            $languages = [];
            foreach ( $results as $row ) {
                $language_name  = $row['language_name'];
                $framework_name = $row['framework_name'];

                if (! isset( $languages[ $language_name ] ) ) {
                    $languages[ $language_name ] = [
                        'language'  => $language_name,
                        'frameworks' => [],
                    ];
                }

                if ( $framework_name ) {
                    $languages[ $language_name ]['frameworks'] = $framework_name;
                }
            }

            // Reset array keys for JSON compatibility (important!)
            $languagesAndFrameworks = array_values( $languages );

            $response = array(
                'languagesAndFrameworks' => ( ! empty( $languagesAndFrameworks ) ? $languagesAndFrameworks : [] ),
                'nonce' => wp_create_nonce( 'wp_rest' ),
            );

            return rest_ensure_response( $response );
        }

        public function ajax_handle_form_submission( WP_REST_Request $request ) {
            // Retrieve the nonce from the header
            $nonce = $request->get_header( 'X-WP-Nonce' );

            // Verify the nonce
            if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) { // 'wp_rest' is the nonce action
                return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
            }

            // Get all sent parameters
            $params = $request->get_params();

            // Insert the data into the database

            $response = array(
                'nonce' => wp_create_nonce( 'wp_rest' ),
            );

            return rest_ensure_response( $response );
        }
    }
}