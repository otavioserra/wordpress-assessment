jQuery(document).ready(function () {
    let apiVersion = 'v1';

    function more_info(p = {}) {
        // Get the nonce of plugin.
        var nonce = jQuery('input[name="otavio-serra-nonce"]').val();

        // Set up the data object.
        var data = {
            option: 'more-info',
            nonce,
        };

        // Request to get more info.
        jQuery
            .ajax({
                url:
                    wpApiSettings.root +
                    'otavio-serra/' +
                    apiVersion +
                    '/admin-page/',
                method: 'GET',
                xhrFields: { withCredentials: true },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(
                        'X-WP-Nonce',
                        wpApiSettings.nonce
                    );
                },
                data,
            })
            .done(function (response) {
                if (response.status === 'OK') {

                }

                if ('nonce' in response) {
                    jQuery('input[name="otavio-serra-nonce"]').val(
                        response.nonce
                    );
                }
            })
            .fail(function (response) {
                if ('responseJSON' in response) {
                    console.log(
                        response.status +
                        ': ' +
                        response.responseJSON.message
                    );
                } else {
                    console.log(response);
                }
            });
    }

    function start() {
        more_info();
    }

    start();
});