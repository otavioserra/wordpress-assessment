jQuery(document).ready(function ($) {

	const infoButtons = document.querySelectorAll('.more-info-button');

	infoButtons.forEach(button => {
		button.addEventListener('click', async (event) => {
			// Get the ID from the button's data-id attribute
			const submissionId = event.target.dataset.id;

			if (!submissionId) {
				console.error('No submission ID found');
				return;
			}

			try {
				// Use apiFetch with the submission ID in the URL
				const response = await apiFetch({
					path: `/otavio-serra/v1/gravatar-info/${submissionId}`, // Use the ID in the path
					method: 'GET', // Keep as GET
				});

				// Find the container using the SAME ID
				const container = document.querySelector(`.gravatar-info-container[data-id="${submissionId}"]`);

				if (container) {
					if (response && response.thumbnailUrl) { // Check if data exists
						container.innerHTML = `
                            <img src="${response.thumbnailUrl}" alt="Gravatar">
                            <p><strong>Display Name:</strong> ${response.displayName || 'N/A'}</p>
                            <p><strong>About Me:</strong> ${response.aboutMe || 'N/A'}</p>
                            <p><strong>Profile URL:</strong> <a href="${response.profileUrl || '#'}" target="_blank">${response.profileUrl || 'N/A'}</a></p>
                        `;  // Add other data as needed
					} else {
						container.innerHTML = `<p>No Gravatar found.</p>`;
					}
				}

			} catch (error) {
				console.error('Error fetching Gravatar info:', error);
				// Display an error message, ideally in the container
				const container = document.querySelector(`.gravatar-info-container[data-id="${submissionId}"]`);
				if (container) {
					container.innerHTML = `<p style="color: red;">Error: ${error.message || 'Could not fetch Gravatar data.'}</p>`;
				}
			}
		});
	});
});