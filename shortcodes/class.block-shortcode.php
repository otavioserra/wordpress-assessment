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
                plugins_url('build/public-block.js', __FILE__),
                $asset_file['dependencies'],
                $asset_file['version'],
                true
            );

            wp_enqueue_style(
                OS_BLOCK_SCRIPT . '-block-style',
                plugins_url('build/style-index.css', __FILE__),
                array(),
                $asset_file['version']
            );
        }
    }
}