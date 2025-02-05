import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Input from './Input';
import Label from './Label';
import Div from './Div';
import Section from './Section';
import Form from './Form';
import Button from './Button';
import FormHeader from './FormHeader';
import Selector from './Selector';
import '../style.scss';

export default function Widget() {
	const [languagesAndFrameworks, setLanguagesAndFrameworks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWpApiData = async () => {
			try {
				if (typeof wpApiSettings === 'undefined') {
					throw new Error(
						'wpApiSettings is not defined.  Make sure the script is localized correctly.'
					);
				}

				const dataResponse = await fetch(
					`${wpApiSettings.root}otavio-serra/v1/languages-frameworks`,
					{
						headers: {
							'X-WP-Nonce': wpApiSettings.nonce,
						},
					}
				);

				if (!dataResponse.ok) {
					const errorData = await dataResponse.json(); // Try to get more specific error info
					throw new Error(
						`HTTP error! status: ${dataResponse.status}, message: ${errorData?.message || 'Unknown error'}`
					);
				}

				const data = await dataResponse.json();

				if (data && data.nonce) {
					wpApiSettings.nonce = data.nonce;
				} else {
					console.error('Nonce not returned from server.');
				}

				const processedLanguages = data.languagesAndFrameworks.map(
					(language) => ({
						...language,
						frameworks: Array.isArray(language.frameworks)
							? language.frameworks
							: [language.frameworks],
					})
				);

				setLanguagesAndFrameworks(processedLanguages);
			} catch (err) {
				console.error('Error fetching data:', err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchWpApiData();
	}, []);

	const [formErrors, setFormErrors] = useState({});

	const validateForm = (formData) => {
		const errors = {};

		if (!formData.get('first_name')) {
			errors.first_name = __(
				'First name is required.',
				'otavio-serra-plugin'
			);
		}
		if (!formData.get('last_name')) {
			errors.last_name = __(
				'Last name is required.',
				'otavio-serra-plugin'
			);
		}
		if (!formData.get('phone')) {
			errors.phone = __(
				'Phone number is required.',
				'otavio-serra-plugin'
			);
		} else if (
			!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(formData.get('phone'))
		) {
			errors.phone = __(
				'Invalid phone number format. Use XXX-XXX-XXXX',
				'otavio-serra-plugin'
			);
		}

		if (!formData.get('birthdate')) {
			errors.birthdate = __(
				'Birthdate is required.',
				'otavio-serra-plugin'
			);
		}
		if (!formData.get('email')) {
			errors.email = __('Email is required.', 'otavio-serra-plugin');
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
			errors.email = __('Invalid email format.', 'otavio-serra-plugin');
		}
		if (!formData.get('country')) {
			errors.country = __('Country is required.', 'otavio-serra-plugin');
		}
		if (!formData.get('bioOrResume')) {
			errors.bioOrResume = __(
				'Bio or resume is required.',
				'otavio-serra-plugin'
			);
		}

		if (!formData.get('language')) {
			errors.language = __(
				'Language is required.',
				'otavio-serra-plugin'
			);
		}
		if (!formData.get('framework')) {
			errors.framework = __(
				'Framework is required.',
				'otavio-serra-plugin'
			);
		}

		return errors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const errors = validateForm(formData);

		setFormErrors(errors);

		if (Object.keys(errors).length > 0) {
			return;
		}

		if (typeof wpApiSettings === 'undefined') {
			console.error('wpApiSettings is not defined.');
			return;
		}

		try {
			const submitResponse = await fetch(
				`${wpApiSettings.root}otavio-serra/v1/submit-form`,
				{
					method: 'POST',
					headers: {
						'X-WP-Nonce': wpApiSettings.nonce,
					},
					body: formData,
				}
			);

			if (!submitResponse.ok) {
				const errorData = await submitResponse.json();
				throw new Error(
					`HTTP error! status: ${submitResponse.status}, message: ${errorData?.message || 'Unknown error'}`
				);
			}

			const data = await submitResponse.json();

			if (data && data.nonce) {
				wpApiSettings.nonce = data.nonce;
			} else {
				console.error('Nonce not returned from server.');
			}

			console.log('Form submitted successfully:', data);
		} catch (errorReturn) {
			console.error('Error submitting form:', errorReturn);
		}
	};

	if (loading) {
		return (
			<div className="loading-container">
				<h5 className="loading-title">
					{__('Loading…', 'otavio-serra-plugin')}
				</h5>
				<p className="loading-text">
					{__('Fetching data…', 'otavio-serra-plugin')}
				</p>
				<div className="loading-spinner-container">
					<svg
						aria-hidden="true"
						className="loading-spinner"
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
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="error-alert">
				<svg
					className="error-icon"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
				</svg>
				<span className="sr-only">
					{__('Error', 'otavio-serra-plugin')}
				</span>
				<div>
					<span className="error-title">
						{__(
							'Error: problems rendering the form. Try again later.',
							'otavio-serra-plugin'
						)}
					</span>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<Div
				type="class"
				className="wp-block-assessment-otavio-serra-plugin"
			></Div>
			<Section>
				<FormHeader
					title={__(
						'Interview Development Position',
						'otavio-serra-plugin'
					)}
				>
					{__(
						'Fill all the form and click on submit button to send the form and start to enter in a job assessment',
						'otavio-serra-plugin'
					)}
				</FormHeader>
				<Form onSubmit={handleSubmit}>
					<Div type="cols-2">
						<Div>
							<Input
								type="text"
								name="first_name"
								placeholder=" "
								required
								error={formErrors.first_name}
							/>
							<Label htmlFor="first_name">
								{__('First Name', 'otavio-serra-plugin')}
							</Label>
						</Div>
						<Div>
							<Input
								type="text"
								name="last_name"
								placeholder=" "
								required
								error={formErrors.first_name}
							/>
							<Label htmlFor="last_name">
								{__('Last Name', 'otavio-serra-plugin')}
							</Label>
						</Div>
					</Div>
					<Div type="cols-2">
						<Div>
							<Input
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								name="phone"
								placeholder=" "
								required
								error={formErrors.first_name}
							/>
							<Label htmlFor="phone">
								{__('Phone Number', 'otavio-serra-plugin')}
							</Label>
						</Div>
						<Div>
							<Input
								type="date"
								name="birthdate"
								value=""
								placeholder={null}
								required
								error={formErrors.first_name}
							/>
							<Label htmlFor="birthdate">
								{__('Birthdate', 'otavio-serra-plugin')}
							</Label>
						</Div>
					</Div>
					<Div>
						<Input
							type="email"
							name="email"
							placeholder=" "
							required
							error={formErrors.first_name}
						/>
						<Label htmlFor="email">
							{__('Email Address', 'otavio-serra-plugin')}
						</Label>
					</Div>
					<Div>
						<Input
							type="text"
							name="country"
							placeholder=" "
							required
							error={formErrors.first_name}
						/>
						<Label htmlFor="country">
							{__('Country', 'otavio-serra-plugin')}
						</Label>
					</Div>
					<Div>
						<Input
							type="textarea"
							name="bioOrResume"
							placeholder=" "
							required
							error={formErrors.first_name}
						/>
						<Label htmlFor="country">
							{__('Short Bio or Resume', 'otavio-serra-plugin')}
						</Label>
					</Div>
					<Div>
						<Selector
							fields={languagesAndFrameworks}
							inputLanguage="language"
							inputFramework="framework"
							label={__(
								'Language & Framework',
								'otavio-serra-plugin'
							)}
							labelLanguage={__(
								'Select Language…',
								'otavio-serra-plugin'
							)}
							labelFramework={__(
								'Select Framework…',
								'otavio-serra-plugin'
							)}
							required={true}
							errorLanguage={formErrors.language}
							errorFramework={formErrors.framework}
						/>
					</Div>
					<Button type="submit">
						{__('Submit', 'otavio-serra-plugin')}
					</Button>
				</Form>
			</Section>
		</>
	);
}
