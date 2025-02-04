<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode($atts = array()){
            return '<div class="' . esc_attr(OS_BLOCK_CLASS) . '"><div class="' . esc_attr(OS_BLOCK_CONTAINER_CLASS) . '"></div></div>';
        }
    }
}