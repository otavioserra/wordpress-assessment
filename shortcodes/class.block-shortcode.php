<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            $atts = shortcode_atts( array(
                'id' => OS_BLOCK_ID,
            ), $atts, OS_BLOCK_SHORTCODE_ID );
        
            if ( ! $atts['id'] ) {
                return 'Block ID not provided.';
            }
        
            $block_id = $atts['id'];
        
            ob_start();
        
            // Search for the wp_block post type with the block ID
            $args = array(
                'post_type' => 'wp_block',
                'p' => $block_id,
            );
            $query = new WP_Query( $args );
        
            if ( $query->have_posts() ) {
                while ( $query->have_posts() ) {
                    $query->the_post();
                    $block_content = get_the_content(); // Block content
        
                    // Render the block using do_blocks or render_block (WordPress 5.5+)
                    if ( function_exists( 'render_block' ) ) {
                        echo render_block( array( 'blockName' => OS_BLOCK_ID, 'innerHTML' => $block_content ) );
                    } else {
                        echo do_blocks( $block_content ); // fallback for older versions
                    }
                }
            } else {
                echo 'Block not found.';
            }
        
            wp_reset_postdata();
        
            return ob_get_clean();
        }
    }
}