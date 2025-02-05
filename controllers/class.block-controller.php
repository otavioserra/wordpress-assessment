<?php

if ( ! class_exists( 'Block_Controller' ) ) {
	class Block_Controller {

		public function __construct() {
			add_action(
				'rest_api_init',
				function () {
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
							'methods'  => 'POST',
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
                return new WP_Error( 'invalid_nonce', __( 'Invalid nonce', 'otavio-serra-plugin' ), array( 'status' => 403 ) );
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
            foreach ($results as $row) {
                $language_name = $row['language_name'];
                $framework_name = $row['framework_name'];

                if (!isset($languages[$language_name])) {
                    $languages[$language_name] = [
                        'language' => $language_name,
                        'frameworks' => [], // Initialize as an empty array ALWAYS
                    ];
                }

                if ($framework_name) {
                    $languages[$language_name]['frameworks'][] = $framework_name;
                }
            }

            // Reset array keys for JSON compatibility (important!)
            $languagesAndFrameworks = array_values( $languages );

            $response = array(
                'status' => 'OK',
                'languagesAndFrameworks' => ( ! empty( $languagesAndFrameworks ) ? $languagesAndFrameworks : [] ),
            );

            return rest_ensure_response( $response );
        }

        public function ajax_handle_form_submission( WP_REST_Request $request ) {
            // Verify the nonce.
            $nonce = $request->get_header( 'X-WP-Nonce' );
            if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
                return new WP_Error( 'invalid_nonce', __( 'Invalid nonce', 'otavio-serra-plugin' ), array( 'status' => 403 ) );
            }

            $params = $request->get_params();

            // Check if the expected data is present and is a string.
            if ( isset( $params[0] ) && is_string( $params[0] ) ) {
                $formDataString = $params[0];

                // Parse the URL-encoded string into an associative array.
                parse_str( $formDataString, $formData );

                // --- VALIDATION AND SANITIZATION ---

                $first_name = sanitize_text_field( $formData['first_name'] ?? '' );
                $last_name  = sanitize_text_field( $formData['last_name'] ?? '' );
                $phone      = sanitize_text_field( $formData['phone'] ?? '' );
                $birthdate  = sanitize_text_field( $formData['birthdate'] ?? '' );
                $email      = sanitize_email( $formData['email'] ?? '' );
                $country    = sanitize_text_field( $formData['country'] ?? '' );
                $bio        = sanitize_textarea_field( $formData['bioOrResume'] ?? '' );
                $language   = sanitize_text_field( $formData['language'] ?? '' );
                $framework  = sanitize_text_field( $formData['framework'] ?? '' );

                // Validation (AFTER sanitization).
                $errors = [];

                if ( empty( $first_name ) ) {
                    $errors['first_name'] = __( 'First name is required.', 'otavio-serra-plugin' );
                }
                if ( empty( $last_name ) ) {
                    $errors['last_name'] = __( 'Last name is required.', 'otavio-serra-plugin' );
                }
                if ( empty( $phone ) ) {
                    $errors['phone'] = __( 'Phone number is required.', 'otavio-serra-plugin' );
                } elseif ( ! preg_match( '/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $phone ) ) {
                    $errors['phone'] = __( 'Invalid phone number format. Use XXX-XXX-XXXX', 'otavio-serra-plugin' );
                }

                if ( empty( $birthdate ) ) {
                    $errors['birthdate'] = __( 'Birthdate is required.', 'otavio-serra-plugin' );
                } elseif ( ! preg_match( '/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $birthdate ) ) {
                    $errors['birthdate'] = __( 'Invalid date format.  Use YYYY-MM-DD.', 'otavio-serra-plugin' );
                }
                // Convert and validate birthdate using DateTime (BEST PRACTICE)
                $birthdate_obj = DateTime::createFromFormat( 'Y-m-d', $birthdate );
                if ( ! $birthdate_obj ) {
                    $errors['birthdate'] = __( 'Invalid date.', 'otavio-serra-plugin' );
                } else {
                    //  convert to MySQL format.
                    $birthdate = $birthdate_obj->format( 'Y-m-d' );
                }

                if ( empty( $email ) ) {
                    $errors['email'] = __( 'Email is required.', 'otavio-serra-plugin' );
                } elseif ( ! is_email( $email ) ) {
                    $errors['email'] = __( 'Invalid email address.', 'otavio-serra-plugin' );
                }

                if ( empty( $country ) ) {
                    $errors['country'] = __( 'Country is required.', 'otavio-serra-plugin' );
                }
                if ( empty( $bio ) ) {
                    $errors['bioOrResume'] = __( 'Bio or resume is required.', 'otavio-serra-plugin' );
                }
                if ( empty( $language ) ) {
                    $errors['language'] = __( 'Language is required.', 'otavio-serra-plugin' );
                }
                if ( empty( $framework ) ) {
                    $errors['framework'] = __( 'Framework is required.', 'otavio-serra-plugin' );
                }

                if ( ! empty( $errors ) ) {
                    return new WP_REST_Response( array( 'errors' => $errors ), 400 );
                }

                // --- DATABASE INSERTION ---
                global $wpdb;
                $table_name = $wpdb->prefix . 'wa_form_submissions';

                $result = $wpdb->insert(
                    $table_name,
                    array(
                        'first_name'            => $first_name,
                        'last_name'             => $last_name,
                        'phone'                 => $phone,
                        'birthdate'             => $birthdate,
                        'email'                 => $email,
                        'country'               => $country,
                        'bioOrResume'           => $bio,
                        'language'              => $language,
                        'framework'             => $framework,
                        'date_creation'         => current_time( 'mysql' ),
                    ),
                    array( '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' )
                );
            }
            

            if ( $result === false ) {
                error_log( 'Database error: ' . $wpdb->last_error );
                return new WP_REST_Response( array( 'message' => __( 'Database error.', 'otavio-serra-plugin' ) ), 500 );
            }

            return rest_ensure_response( array( 'message' => __( 'Form submitted successfully!', 'otavio-serra-plugin' ) ) );
        }
    }
}