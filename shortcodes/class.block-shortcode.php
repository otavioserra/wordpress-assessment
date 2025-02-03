<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            $atts = shortcode_atts( array(
                // More attrs here
            ), $atts, 'my_block_shortcode' );
        
            // Create the block array
            $block = array(
                'blockName' => OS_BLOCK_ID, // Name of your block
                'attrs' => $atts, // Block attributes
            );
        
            // Render the block
            if ( function_exists( 'render_block' ) ) {
                return render_block( $block );
            } else {
                return do_blocks( $content );
            }
        }
    }
}