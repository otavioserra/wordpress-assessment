<?php
/**
 * Plugin Name:       Otavio Serra Plugin
 * Description:       WordPress Plugin Development Challenge - The Company requires a form on the website that allows the developers to submit their information to be interviewed for a development position.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Otávio Campos de Abreu Serra
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       otavio-serra-plugin
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if( ! class_exists( 'Otavio_Serra_Plugin' ) ){
    class Otavio_Serra_Plugin{

		function __construct(){
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		public static function activate(){
            update_option( 'rewrite_rules', '' );

        }

        public static function desactivate(){
            flush_rewrite_rules();
        }

        public static function uninstall(){
            
        }

		public function register_blocks(){
			register_block_type( __DIR__ );
		}

	}
}

if( class_exists( 'Otavio_Serra_Plugin' ) ){
    register_activation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'activate' ) );
    register_deactivation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'desactivate' ) );
    register_uninstall_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'uninstall' ) );

    $Otavio_Serra_Plugin = new Otavio_Serra_Plugin();
}
