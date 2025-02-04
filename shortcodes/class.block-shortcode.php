<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct() {
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode($atts = array()) {
            $this->enqueue_block_assets();

            return '<div class="' . esc_attr(OS_BLOCK_CLASS) . '"><div class="' . esc_attr(OS_BLOCK_CONTAINER_CLASS) . '"></div></div>';
        }

        public function enqueue_block_assets() {
            $asset_file = include( OS_PATH . 'build/public-block.asset.php' );

            wp_enqueue_script(
                OS_BLOCK_SCRIPT . '-block-script',
                OS_URL . 'build/public-block.js',
                $asset_file['dependencies'],
                $asset_file['version'],
                true
            );

            wp_enqueue_style(
                OS_BLOCK_SCRIPT . '-block-index',
                OS_URL . 'build/index.css',
                array(),
                $asset_file['version']
            );

            wp_enqueue_style(
                OS_BLOCK_SCRIPT . '-block-style-index',
                OS_URL . 'build/style-index.css',
                array(),
                $asset_file['version']
            );
        }
    }
}