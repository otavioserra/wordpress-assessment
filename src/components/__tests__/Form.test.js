import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form.js';
import '@testing-library/jest-dom';

describe('Form Component', () => {
	it('renders children correctly', () => {
		render(
			<Form>
				<div>Test Child</div>
			</Form>
		);

		expect(screen.getByText('Test Child')).toBeInTheDocument();
	});

	it('calls onSubmit prop when form is submitted', () => {
		const handleSubmit = jest.fn(); // Create a mock function
		render(
			<Form onSubmit={handleSubmit}>
				<button type="submit">Submit</button>
			</Form>
		);

		fireEvent.submit(screen.getByRole('form')); // Use getByRole('form')
		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});
});
