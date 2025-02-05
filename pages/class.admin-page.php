<?php

if ( ! class_exists( 'Admin_Page' ) ) {
	class Admin_Page {

		public function __construct() {
			add_action(
				'rest_api_init',
				function () {
					register_rest_route(
						'otavio-serra/v1',
						'/admin-page/',
						array(
							'methods'  => WP_REST_Server::READABLE,
							'callback' => array( $this, 'ajax_additional_information' ),
							'permission_callback' => array( $this, 'ajax_additional_information_permission' ),
						)
					);
				}
			);
		}

		public function page() {
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			wp_enqueue_script( 'wp-api' );
			
			wp_enqueue_style( 'otavio-serra-plugin-admin', OS_URL . 'pages/css/admin.css', array(), ( OS_DEBUG ? filemtime( OS_PATH . 'pages/css/admin.css' ) : OS_VERSION ) );
			wp_enqueue_script( 'otavio-serra-plugin-admin', OS_URL . 'pages/js/admin.js', array( 'jquery' ), ( OS_DEBUG ? filemtime( OS_PATH . 'pages/js/admin.js' ) : OS_VERSION ) );

			// Set the flag to show the alert.
			$flag_registers_founded = false;

			// Get the data from the database.
			global $wpdb;
			$query = $wpdb->prepare(
				"SELECT * 
				FROM {$wpdb->prefix}wa_form_submissions 
				ORDER BY date_creation DESC",
				array()
			);
			$form_submissions = $wpdb->get_results( $query, ARRAY_A );

			// Check if there are any records.
			if( ! empty( $form_submissions ) ){
				$flag_registers_founded = true;
			}

			require OS_PATH . 'views/view.admin-page.php';
		}

		public function ajax_additional_information( $request ) {
			// Retrieve the nonce from the header
			$nonce = $request->get_header( 'X-WP-Nonce' );

			// Verify the nonce
			if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) { // 'wp_rest' is the nonce action
				return new WP_Error( 'invalid_nonce', 'Invalid nonce', array( 'status' => 403 ) );
			}

			// Get all sent parameters
			$params = $request->get_params();

			// Require database class to manipulate data.
			require_once( OS_PATH . 'includes/class.database.php' );

			// Get all parmas sent.
			$data = $params['data'];

			// Sanitize all fields
			// $data = sanitize_text_field( $data );
			
			// Response data
			$response = array(
				'status'        => 'OK',
				'nonce'         => wp_create_nonce( 'wp_rest' ),
			);

			return rest_ensure_response( $response );
		}

		public function ajax_additional_information_permission( $request ) {
			if ( ! is_user_logged_in() ) {
				// Response data
				$response = array(
					'status' => 'ERROR',
					'alert'  => __( 'User is not logged in', 'otavio-serra-plugin' ),
				);

				return rest_ensure_response( $response );
			}

			return true;
		}
	}
}
