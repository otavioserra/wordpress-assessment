<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            // Check if the block is registered
            if ( ! WP_Block_Type_Registry::get_instance()->is_registered( OS_BLOCK_ID ) ) {
                return ''; // Or an error message
            }

            // Extract shortcode attributes
            $atts = shortcode_atts(
                array(
                // Default attributes, if any
                ),
                $atts,
                OS_BLOCK_SHORTCODE_ID
            );

            // Get the block type object
            $block_type = WP_Block_Type_Registry::get_instance()->get_registered( OS_BLOCK_ID );

            $content = 'block_type->view_script: ' . $block_type->view_script;

            return $content;

            // Enqueue the block's script (if it has one)
            if ( ! empty( $block_type->view_script ) ) {
                wp_enqueue_script( $block_type->view_script );


                // Add attributes as inline script, associated with the already enqueued script.
                $data = sprintf(
                    'var otavioSerraBlockData = otavioSerraBlockData || {}; otavioSerraBlockData["%s"] = %s;',
                    esc_js( $unique_id ),
                    wp_json_encode( $atts )
                );
                wp_add_inline_script( $block_type->view_script, $data, 'before' );
            }

            // Create a unique ID for the placeholder (important to avoid conflicts)
            $unique_id = OS_BLOCK_ID . '-' . uniqid();

            // Render the HTML placeholder
            $content = sprintf(
                '<div id="%s" class="' . OS_BLOCK_ID . '-container" data-attributes="%s"></div>',
                $unique_id,
                esc_attr( wp_json_encode( $atts ) )
            );

            return $content;
        }
    }
}