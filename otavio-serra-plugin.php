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
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if( ! class_exists( 'Otavio_Serra_Plugin' ) ){
    class Otavio_Serra_Plugin{
        public $objects = array();

		function __construct(){
            $this->define_constants();

			require_once( OS_PATH . 'controllers/class.block-controller.php' );
            $Block_Controller = new Block_Controller();

			require_once( OS_PATH . 'shortcodes/class.block-shortcode.php' );
            $Block_Shortcode = new Block_Shortcode();
            
            require_once( OS_PATH . 'pages/class.admin-page.php' );
            $this->objects['Admin_Page'] = new Admin_Page();
            
			add_action( 'init', array( $this, 'register_blocks' ) );
            add_action( 'admin_menu', array( $this, 'admin_menu' ) );
            add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
		}

		private function define_constants(){
            if( ! function_exists('get_plugin_data') ){
                require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
            }

            $plugin_data = get_plugin_data( __FILE__ );

            define( 'OS_ID', 'Otavio_Serra_Plugin' );
            define( 'OS_VERSION', $plugin_data['Version'] );
            define( 'OS_DEBUG', true );
            define( 'OS_PATH', plugin_dir_path( __FILE__ ) );
            define( 'OS_URL', plugin_dir_url( __FILE__ ) );
            define( 'OS_BLOCK_ID', 'assessment/otavio-serra-plugin' ); // Block ID.
            define( 'OS_BLOCK_SHORTCODE_ID', 'otavio_serra_block' ); // Block shortcode ID.
            define( 'OS_BLOCK_CLASS', 'wa-otavio-serra-block' ); // Used for the shortcode.
            define( 'OS_BLOCK_CONTAINER_CLASS', 'wa-otavio-serra-component-root' ); // Used for the shortcode.
            define( 'OS_BLOCK_SCRIPT', 'otavio-serra-plugin' ); // Block script.
            define( 'OS_ON_DESCTIVATION_DROP_TABLES', false ); // Change to true to drop tables on desactivation.
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
			register_block_type_from_metadata( OS_PATH );
            add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) );
		}

        public function admin_menu(){
            add_menu_page(
                esc_html__( 'Otavio Serra Plugin', 'otavio-serra-plugin' ),
                esc_html__( 'Otavio Serra Plugin', 'otavio-serra-plugin' ),
                'manage_options',
                'otavio_serra_admin',
                array( $this->objects['Admin_Page'], 'page' ),
                'dashicons-id-alt'
            );
        }

        public function load_textdomain() {
            load_plugin_textdomain( 'otavio-serra-plugin', false, OS_PATH . '/languages/' );
            add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) );
        }

        public function enqueue_block_assets() {
            $script_asset_path = OS_PATH . "build/index.asset.php";
            $script_asset = require( $script_asset_path );

            wp_enqueue_script(
                'assessment-otavio-serra-plugin-editor',
                OS_URL . 'build/index.js',
                $script_asset['dependencies'],
                $script_asset['version'],
                true
            );
            wp_set_script_translations( 'assessment-otavio-serra-plugin-editor', 'otavio-serra-plugin', OS_PATH . 'languages' );

            $view_script_asset_path = OS_PATH . "build/public-block.asset.php";
            $view_script_asset = require( $view_script_asset_path );

            wp_enqueue_script(
                'assessment-otavio-serra-plugin-view',
                OS_URL . 'build/public-block.js',
                $view_script_asset['dependencies'],
                $view_script_asset['version'],
                true
            );
            wp_set_script_translations( 'assessment-otavio-serra-plugin-view', 'otavio-serra-plugin', OS_PATH . 'languages' );
        }
	}
}

if( class_exists( 'Otavio_Serra_Plugin' ) ){
    register_activation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'activate' ) );
    register_deactivation_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'desactivate' ) );
    register_uninstall_hook( __FILE__, array( 'Otavio_Serra_Plugin', 'uninstall' ) );

    $Otavio_Serra_Plugin = new Otavio_Serra_Plugin();
}
