import { useState, useEffect } from '@wordpress/element';
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

				if (dataResponse && dataResponse.nonce) {
					wpApiSettings.nonce = dataResponse.nonce;
				} else {
					console.error('Nonce not returned from server.');
				}

				const data = await dataResponse.json();
				setLanguagesAndFrameworks(data.languagesAndFrameworks);
			} catch (err) {
				console.error('Error fetching data:', err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchWpApiData();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (typeof wpApiSettings === 'undefined') {
			console.error('wpApiSettings is not defined.');
			return; // Stop submission
		}

		try {
			const formData = new FormData(event.target);
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

			if (submitResponse && submitResponse.nonce) {
				wpApiSettings.nonce = submitResponse.nonce;
			} else {
				console.error('Nonce not returned from server.');
			}

			const submitData = await submitResponse.json();
			console.log('Form submitted successfully:', submitData);
		} catch (errorReturn) {
			console.error('Error submitting form:', errorReturn);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<Div
				type="class"
				className="wp-block-assessment-otavio-serra-plugin"
			></Div>
			<Section>
				<FormHeader title="Interview Development Position">
					Fill all the form and click on submit button to send the
					form and start to enter in a job assessment
				</FormHeader>
				<Form onSubmit={handleSubmit}>
					<Div type="cols-2">
						<Div>
							<Input
								type="text"
								name="first_name"
								placeholder=" "
								required
							/>
							<Label htmlFor="first_name">First Name</Label>
						</Div>
						<Div>
							<Input
								type="text"
								name="last_name"
								placeholder=" "
								required
							/>
							<Label htmlFor="last_name">Last Name</Label>
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
							/>
							<Label htmlFor="phone">Phone Number</Label>
						</Div>
						<Div>
							<Input
								type="date"
								name="birthdate"
								value=""
								placeholder={null}
								required
							/>
							<Label htmlFor="birthdate">Birthdate</Label>
						</Div>
					</Div>
					<Div>
						<Input
							type="email"
							name="email"
							placeholder=" "
							required
						/>
						<Label htmlFor="email">Email Address</Label>
					</Div>
					<Div>
						<Input
							type="text"
							name="country"
							placeholder=" "
							required
						/>
						<Label htmlFor="country">Country</Label>
					</Div>
					<Div>
						<Input
							type="textarea"
							name="bioOrResume"
							placeholder=" "
							required
						/>
						<Label htmlFor="country">Short Bio or Resume</Label>
					</Div>
					<Div>
						<Selector
							fields={languagesAndFrameworks}
							inputLanguage="language"
							inputFramework="framework"
							label="Language & Framework"
							labelLanguage="Select Language..."
							labelFramework="Select Framework..."
							required={true}
						/>
					</Div>
					<Button type="submit">Submit</Button>
				</Form>
			</Section>
		</>
	);
}
