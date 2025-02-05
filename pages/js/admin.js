jQuery(document).ready(function () {
	const apiVersion = 'v1';

	function more_info(p = {}) {
		// Set up the data object.
		const data = {
			option: 'more-info',
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
					xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
				},
				data,
			})
			.done(function (response) {
				if (response.status === 'OK') {
				}

				if (response && response.nonce) {
					wpApiSettings.nonce = response.nonce;
				} else {
					console.error('Nonce not returned from server.');
				}
			})
			.fail(function (response) {
				if ('responseJSON' in response) {
					console.log(
						response.status + ': ' + response.responseJSON.message
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
