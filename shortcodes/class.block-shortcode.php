<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            $block_name = OS_BLOCK_ID; // The name of the block
            $block_instance = null;

            // Search for all registered instances of the block. There may be more than one!
            $block_types = WP_Block_Type_Registry::get_instance()->get_registered( $block_name );

            if ( ! empty( $block_types ) ) {
                foreach ( $block_types as $block_type ) {

                    // Dynamically creates a block with the default attributes. Adjust if your block has specific attributes.
                    $block_instance = array(
                        'blockName' => $block_name,
                        'attrs' => array(),
                    );

                    break; // Stop iterating after finding the first block.
                }
            }

            if ( $block_instance ) {
                return render_block( $block_instance );
            } else {
                return 'Block not found.';
            }
        }
    }
}