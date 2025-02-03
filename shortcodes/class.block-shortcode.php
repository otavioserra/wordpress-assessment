<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            $block_name = 'assessment/otavio-serra-plugin';
            $block_instance = null;

            $block_types = WP_Block_Type_Registry::get_instance()->get_registered( $block_name );

            if (! empty( $block_types ) ) {
                foreach ($block_types as $block_type) {

                    $attributes = isset($block_type->attributes)? $block_type->attributes: array();

                    $block_instance = array(
                        'blockName' => $block_name,
                        'attrs' => $attributes,
                    );

                    break;
                }
            }

            if ( $block_instance ) {

                $output =  $block_types[$block_name]->render_callback( $block_instance['attrs'] );

                return $output;

            } else {
                return 'Bloco não encontrado.';
            }
        }
    }
}