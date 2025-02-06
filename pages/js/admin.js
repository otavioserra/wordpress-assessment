jQuery(document).ready(function ($) {
	const infoButtons = document.querySelectorAll('.more-info-button');
	const spinnerWrapper = document.querySelector('.wa-spinner-wrapper');

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

			event.target.style.display = 'none';

			// Clone the spinner
			const spinnerClone = spinnerWrapper.firstElementChild.cloneNode(true);
			container.appendChild(spinnerClone);

			try {
				const response = await wp.apiFetch({
					path: `/otavio-serra/v1/gravatar-info/${submissionId}`,
					method: 'GET',
				});

				if (response && response.thumbnailUrl) {
					container.innerHTML = `
                        <img src="${response.thumbnailUrl}" alt="Gravatar">
                        <p><strong>Display Name:</strong> ${response.displayName || 'N/A'}</p>
                        <p><strong>About Me:</strong> ${response.aboutMe || 'N/A'}</p>
                        <p><strong>Profile URL:</strong> <a href="${response.profileUrl || '#'}" target="_blank">${response.profileUrl || 'N/A'}</a></p>
                    `;
				} else {
					container.innerHTML = `<p>No Gravatar found.</p>`;
				}
			} catch (error) {
				console.error('Error fetching Gravatar info:', error);
				container.innerHTML = `<p style="color: red;">Error: ${error.message || 'Could not fetch Gravatar data.'}</p>`;
			} finally {
				event.target.style.display = 'inline-block';
				//Remove the clone
				container.querySelector('.loading-spinner')?.remove();
			}
		});
	});
});
