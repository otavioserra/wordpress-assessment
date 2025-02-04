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
            $this->define_constants();

			add_action( 'init', array( $this, 'register_blocks' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_assets' ) );

			require_once( OS_PATH . 'shortcodes/class.block-shortcode.php' );
            $Block_Shortcode = new Block_Shortcode();
		}

		private function define_constants(){
            define( 'OS_ID', 'Otavio_Serra_Plugin' );
            define( 'OS_PATH', plugin_dir_path( __FILE__ ) );
            define( 'OS_URL', plugin_dir_url( __FILE__ ) );
            define( 'OS_BLOCK_ID', 'assessment/otavio-serra-plugin' ); // Block ID.
            define( 'OS_BLOCK_SHORTCODE_ID', 'otavio_serra_block' ); // Block shortcode ID.
            define( 'OS_BLOCK_SCRIPT', 'otavio-serra-plugin' ); // Block script.
            define( 'OS_BLOCK_OBJECT', 'waOtavioSerraPlugin' ); // Block object.
            define( 'OS_ON_DESCTIVATION_DROP_TABLES', true ); // Change to true to drop tables on desactivation.
            define( 'OS_ON_UNINSTALL_DROP_TABLES', true ); // Change to true to drop tables on uninstall.
        }

		public static function activate(){
            require_once( OS_PATH . 'includes/class.database.php' );

            update_option( 'rewrite_rules', '' );
			Database::update_database();
        }

        public static function desactivate(){
            flush_rewrite_rules();

			if( OS_ON_DESCTIVATION_DROP_TABLES ){
				require_once( OS_PATH . 'includes/class.database.php' );

				Database::drop_tables();
			}
        }

        public static function uninstall(){
            if( OS_ON_UNINSTALL_DROP_TABLES ){
				require_once( OS_PATH . 'includes/class.database.php' );

				Database::drop_tables();
			}
        }

		public function register_blocks(){
			register_block_type( __DIR__ );
		}

        public function enqueue_block_assets(){
            wp_enqueue_script( 
                OS_BLOCK_SCRIPT.'-block-script',
                plugins_url( 'build/public-block.js', __FILE__ ),
                array( 'wp-element', 'react', 'react-dom' ), 
                '1.0', 
                true 
            );

            wp_enqueue_style(
                OS_BLOCK_SCRIPT . '-block-style',
                plugins_url('build/public-block.css', __FILE__),
                array(),
                '1.0'
            );
        
            wp_localize_script( OS_BLOCK_SCRIPT.'-block-script', OS_BLOCK_OBJECT, array(
                'pluginUrl' => plugins_url( '', __FILE__ ),
                'isAdmin' => is_admin()
            ) );
        }
	}
}

if( class_exists( 'Otavio_Serra_Plugin' ) ){
    register_activation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'activate' ) );
    register_deactivation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'desactivate' ) );
    register_uninstall_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'uninstall' ) );

    $Otavio_Serra_Plugin = new Otavio_Serra_Plugin();
}
