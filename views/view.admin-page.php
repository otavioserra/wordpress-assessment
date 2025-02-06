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
                    </tr>
                    <tr>
                        <th scope="row"><?php echo esc_html__( 'Email', 'otavio-serra-plugin' ); ?></th>
                        <td colspan="5"><?php echo esc_html( $form_submission['email'] ); ?></td>
                    </tr>
                    <tr>
                        <th scope="row"><?php echo esc_html__( 'Language / Framework', 'otavio-serra-plugin' ); ?></th>
                        <td colspan="5"><?php echo esc_html( $form_submission['language'] ); ?> / <?php echo esc_html( $form_submission['framework'] ); ?></td>
                    </tr>
                    <tr>
                        <th scope="row"><?php echo esc_html__( 'Short Bio or Resume', 'otavio-serra-plugin' ); ?></th>
                        <td colspan="5"><?php echo esc_html( $form_submission['bioOrResume'] ); ?></td>
                    </tr>
                    <tr class="wa-table-more-info">
                        <th scope="row"><?php echo esc_html__( 'More Info', 'otavio-serra-plugin' ); ?></th>
                        <td colspan="5" class="gravatar-info-container" data-id="<?php echo $submission_id; ?>">
                            <button class="more-info-button wa-button" data-id="<?php echo $submission_id; ?>">
                                    <?php echo esc_html__( 'Get More Info', 'otavio-serra-plugin' ); ?>
                            </button>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php endif; ?>
    <div class="wa-spinner-wrapper">
        <svg
            aria-hidden="true"
            class="loading-spinner"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
            />
        </svg>
    </div>
</div>