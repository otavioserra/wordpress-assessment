<div class="admin-wrapper">
    <h1 class="wp-heading-inline"><?php echo esc_html__( 'Otavio Serra Plugin - Admin Page', 'otavio-serra-plugin' ); ?></h1>

    <?php if ( ! $view_data['flag_registers_founded'] ) : ?>
        <div class="wa-alert" role="alert">
            <svg class="wa-alert-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div>
                <span class="wa-alert-title"><?php echo esc_html__( ' No register stored on the database: ', 'otavio-serra-plugin' ); ?></span>
                <ul class="wa-alert-list">
                    <li><?php echo esc_html__( 'At least 1 record is needed to show the results.', 'otavio-serra-plugin' ); ?></li>
                    <li><?php echo esc_html__( 'Nobody yet sent data.', 'otavio-serra-plugin' ); ?></li>
                    <li><?php echo esc_html__( 'Try to send yourself one register to see data here.', 'otavio-serra-plugin' ); ?></li>
                </ul>
            </div>
        </div>
    <?php else : ?>
        <div class="wa-table-container">
            <table class="wa-table">
                <thead>
                    <tr>
                        <th scope="col"><?php echo esc_html__( 'First Name', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col"><?php echo esc_html__( 'Last Name', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col"><?php echo esc_html__( 'Phone Number', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col"><?php echo esc_html__( 'Birthdate', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col"><?php echo esc_html__( 'Country', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col"><?php echo esc_html__( 'Date Submission', 'otavio-serra-plugin' ); ?></th>
                        <th scope="col">
                            <span class="sr-only"><?php echo esc_html__('More info', 'otavio-serra-plugin'); ?></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
					<?php foreach ( $view_data['form_submissions'] as $form_submission ) :
						$submission_id = esc_attr( $form_submission['id_wa_form_submissions'] );
						?>
						<tr>
							<td><?php echo esc_html( $form_submission['first_name'] ); ?></td>
							<td><?php echo esc_html( $form_submission['last_name'] ); ?></td>
							<td><?php echo esc_html( $form_submission['phone'] ); ?></td>
							<td><?php echo esc_html( $form_submission['birthdate'] ); ?></td>
							<td><?php echo esc_html( $form_submission['country'] ); ?></td>
							<td><?php echo esc_html( $form_submission['date_creation'] ); ?></td>
							<td class="text-right">
                                <button class="more-info-button" data-id="<?php echo $submission_id; ?>"><?php echo esc_html__( 'More Info', 'otavio-serra-plugin' ); ?></button>
							</td>
						</tr>
						<tr>
							<th scope="row"><?php echo esc_html__( 'Email', 'otavio-serra-plugin' ); ?></th>
							<td colspan="6"><?php echo esc_html( $form_submission['email'] ); ?></td>
						</tr>
						<tr>
							<th scope="row"><?php echo esc_html__( 'Language / Framework', 'otavio-serra-plugin' ); ?></th>
							<td colspan="6"><?php echo esc_html( $form_submission['language'] ); ?> / <?php echo esc_html( $form_submission['framework'] ); ?></td>
						</tr>
						<tr>
							<th scope="row"><?php echo esc_html__( 'Short Bio or Resume', 'otavio-serra-plugin' ); ?></th>
							<td colspan="6"><?php echo esc_html( $form_submission['bioOrResume'] ); ?></td>
						</tr>
						<tr class="wa-table-more-info">
							<th scope="row"><?php echo esc_html__( 'More Info', 'otavio-serra-plugin' ); ?></th>
                            <td colspan="6" class="gravatar-info-container" data-id="<?php echo $submission_id; ?>">&nbsp;</td>
						</tr>
					<?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
</div>