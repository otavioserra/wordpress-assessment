import Input from './Input';
import Label from './Label';
import Div from './Div';
import Section from './Section';
import Form from './Form';
import Button from './Button';
import FormHeader from './FormHeader';

export default function Widget() {
	return (
		<Section>
			<FormHeader title="Interview Development Position">
				Fill all the form and click on submit button to send the form
				and start to enter in a job assessment
			</FormHeader>
			<Form>
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
					<Input type="email" name="email" placeholder=" " required />
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
				<Button type="submit">Submit</Button>
			</Form>
		</Section>
	);
}
