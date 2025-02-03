<?php 

if( ! class_exists( 'Block_Shortcode' ) ){
    class Block_Shortcode {
        public function __construct(){
            add_shortcode( OS_BLOCK_SHORTCODE_ID, array( $this, 'add_shortcode' ) );
        }

        public function add_shortcode( $atts = array() ){
            return '<p class="wp-block-assessment-otavio-serra-plugin"><section class="wa-section-container"><header class="wa-header-container"><h3 class="wa-header-title">Interview Development Position</h3><p class="wa-header-description">Fill all the form and click on submit button to send the form and start to enter in a job assessment</p></header><form class="wa-form-container"><div class="wa-grid-cols-2"><div class="wa-default-container"><input type="text" name="first_name" id="first_name" class="wa-input" placeholder=" " required/><label for="first_name" class="wa-label">First Name</label></div><div class="wa-default-container"><input type="text" name="last_name" id="last_name" class="wa-input" placeholder=" " required/><label for="last_name" class="wa-label">Last Name</label></div></div><div class="wa-grid-cols-2"><div class="wa-default-container"><input type="tel" name="phone" id="phone" class="wa-input" placeholder=" " required/><label for="phone" class="wa-label">Phone Number</label></div><div class="wa-default-container"><input type="date" name="birthdate" id="birthdate" class="wa-input" required/><label for="birthdate" class="wa-label">Birthdate</label></div></div><div class="wa-default-container"><input type="email" name="email" id="email" class="wa-input" placeholder=" " required/><label for="email" class="wa-label">Email Address</label></div><div class="wa-default-container"><input type="text" name="country" id="country" class="wa-input" placeholder=" " required/><label for="country" class="wa-label">Country</label></div><div class="wa-default-container"><textarea name="bioOrResume" id="bioOrResume" class="wa-input" placeholder=" " required></textarea><label for="country" class="wa-label">Short Bio or Resume</label></div><button type="submit" class="wa-button">Submit</button></form></section></p>';
        }
    }
}