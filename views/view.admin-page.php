<div class="admin-wrapper">
    <h1 class="wp-heading-inline"><?php echo esc_html__( 'Otavio Serra Plugin - Admin Page', 'otavio-serra-plugin' ); ?></h1>
    <input type="hidden" name="otavio-serra-nonce" value="<?php echo wp_create_nonce( 'otavio-serra-nonce' ); ?>">
    <div class="wa-table-container">
        <table class="wa-table">
            <thead>
                <tr>
                    <th scope="col"><?php echo esc_html__( 'First Name', 'otavio-serra-plugin' ); ?></th>
                    <th scope="col"><?php echo esc_html__( 'Last Name', 'otavio-serra-plugin' ); ?></th>
                    <th scope="col"><?php echo esc_html__( 'Phone Number', 'otavio-serra-plugin' ); ?></th>
                    <th scope="col"><?php echo esc_html__( 'Birthdate', 'otavio-serra-plugin' ); ?></th>
                    <th scope="col"><?php echo esc_html__( 'Country', 'otavio-serra-plugin' ); ?></th>
                    <th scope="col">
                        <span class="sr-only">More Info</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- cel < --><tr>
                    <td>#first_name#</th>
                    <td>#last_name#</td>
                    <td>#phone_number#</td>
                    <td>#birthdate#</td>
                    <td>#country#</td>
                    <td class="text-right">
                        <a href="#">Show</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><?php echo esc_html__( 'Email', 'otavio-serra-plugin' ); ?></th>
                    <td colspan="5">#email#</td>
                </tr>
                <tr>
                    <th scope="row"><?php echo esc_html__( 'Language & Framework', 'otavio-serra-plugin' ); ?></th>
                    <td colspan="5">#language_framework#</td>
                </tr>
                <tr>
                    <th scope="row"><?php echo esc_html__( 'Short Bio or Resume', 'otavio-serra-plugin' ); ?></th>
                    <td colspan="5">#bioOrResume#</td>
                </tr>
                <tr class="wa-table-more-info">
                    <th scope="row"><?php echo esc_html__( 'More Info', 'otavio-serra-plugin' ); ?></th>
                    <td colspan="5">#more#</td>
                </tr><!-- cel > -->
            </tbody>
        </table>
    </div>
</div>
