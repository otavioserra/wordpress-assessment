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

			require OS_PATH . 'views/view.admin-page.php';
		}

		public function ajax_additional_information( $request ) {
			// Get all sent parameters
			$params = $request->get_params();

			// Verify nonce
			$nonce = $params['nonce'];
			if ( ! wp_verify_nonce( $nonce, 'otavio-serra-nonce' ) ) {
				return new WP_Error( 'rest_api_nonce_invalid', esc_html__( 'The system did not validate the nonce sent. Please try again or seek help from support.', 'otavio-serra-plugin' ), array( 'status' => 403 ) );
			}

			// Require database class to manipulate data.
			require_once( OS_PATH . 'includes/class.database.php' );

			// Get all parmas sent.
			$data = $params['data'];

			// Sanitize all fields
			// $data = sanitize_text_field( $data );
			
			// Response data
			$response = array(
				'status'        => 'OK',
				'nonce'         => wp_create_nonce( 'otavio-serra-nonce' ),
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
