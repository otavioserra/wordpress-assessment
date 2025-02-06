jQuery(document).ready(function ($) {
	const infoButtons = document.querySelectorAll('.more-info-button');

	infoButtons.forEach((button) => {
		button.addEventListener('click', async (event) => {
			const submissionId = event.target.dataset.id;

			if (!submissionId) {
				console.error('No submission ID found');
				return;
			}

			const container = document.querySelector(
				`.gravatar-info-container[data-id="${submissionId}"]`
			);
			if (!container) {
				console.error('Container not found for ID:', submissionId);
				return;
			}

			// Hide button
			event.target.style.display = 'none';

			const spinnerWrapper = document.querySelector(
				'.wa-spinner-wrapper'
			);
			let spinnerClone;
			if (spinnerWrapper && spinnerWrapper.firstElementChild) {
				spinnerClone = spinnerWrapper.firstElementChild.cloneNode(true);
				container.appendChild(spinnerClone);
			} else {
				console.error('Spinner wrapper or its content not found!');
				container.innerHTML = `<p>${wp.i18n.__('Loading...', 'otavio-serra-plugin')}</p>`;
			}

			try {
				const response = await wp.apiFetch({
					path: `/otavio-serra/v1/gravatar-info/${submissionId}`,
					method: 'GET',
				});

				container.innerHTML = '';

				if (response && response.thumbnailUrl) {
					const img = document.createElement('img');
					img.src = response.thumbnailUrl;
					img.alt = 'Gravatar';
					container.appendChild(img);

					const displayNameP = document.createElement('p');
					const displayNameStrong = document.createElement('strong');
					displayNameStrong.textContent =
						wp.i18n.__('Display Name:', 'otavio-serra-plugin') +
						' ';
					displayNameP.appendChild(displayNameStrong);
					displayNameP.appendChild(
						document.createTextNode(
							response.displayName ||
								wp.i18n.__('N/A', 'otavio-serra-plugin')
						)
					);
					container.appendChild(displayNameP);

					const aboutMeP = document.createElement('p');
					const aboutMeStrong = document.createElement('strong');
					aboutMeStrong.textContent =
						wp.i18n.__('About Me:', 'otavio-serra-plugin') + ' ';
					aboutMeP.appendChild(aboutMeStrong);
					aboutMeP.appendChild(
						document.createTextNode(
							response.aboutMe ||
								wp.i18n.__('N/A', 'otavio-serra-plugin')
						)
					);
					container.appendChild(aboutMeP);

					const profileUrlP = document.createElement('p');
					const profileUrlStrong = document.createElement('strong');
					profileUrlStrong.textContent =
						wp.i18n.__('Profile URL:', 'otavio-serra-plugin') + ' ';
					profileUrlP.appendChild(profileUrlStrong);
					const profileLink = document.createElement('a');
					const profileUrl = response.profileUrl || '#';
					profileLink.href = profileUrl;
					profileLink.target = '_blank';
					profileLink.textContent =
						profileUrl !== '#'
							? response.profileUrl
							: wp.i18n.__('N/A', 'otavio-serra-plugin');
					profileUrlP.appendChild(profileLink);
					container.appendChild(profileUrlP);
				} else {
					const noGravatarP = document.createElement('p');
					noGravatarP.textContent = wp.i18n.__(
						'No Gravatar found.',
						'otavio-serra-plugin'
					);
					container.appendChild(noGravatarP);
				}
			} catch (error) {
				console.error('Error fetching Gravatar info:', error);
				container.innerHTML = `<p style="color: red;">${wp.i18n.__('Error:', 'otavio-serra-plugin')} ${error.message || wp.i18n.__('Could not fetch Gravatar data.', 'otavio-serra-plugin')}</p>`;
			} finally {
				event.target.style.display = 'inline-block';
				if (spinnerClone && container.contains(spinnerClone)) {
					container.removeChild(spinnerClone);
				}
			}
		});
	});
});
