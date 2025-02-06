import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Widget from '../Widget.jsx';
import { act } from 'react-dom/test-utils'; // Import act

// Mock apiFetch.  Simpler mocking strategy.
jest.mock('@wordpress/api-fetch', () => ({
	__esModule: true,
	default: jest.fn(),
}));
const apiFetchMock = require('@wordpress/api-fetch').default;

const mockLanguages = {
	languagesAndFrameworks: [
		{
			language: 'JavaScript',
			frameworks: ['React', 'Vue', 'Angular'],
		},
		{
			language: 'PHP',
			frameworks: ['Laravel', 'Symfony', 'CodeIgniter'],
		},
	],
};

describe('Widget Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		// Default mock: return an empty array, simulating no data initially.
		apiFetchMock.mockResolvedValue({ languagesAndFrameworks: [] });
	});

	it('renders loading state initially', async () => {
		render(<Widget />);
		await waitFor(() => {
			expect(screen.getByText('Loading…')).toBeInTheDocument();
		});
	});

	it('renders fetched languages and frameworks', async () => {
		apiFetchMock.mockResolvedValueOnce(mockLanguages);

		render(<Widget />);

		// Wait for the *select* element (combobox) to appear.  This implicitly
		// waits for the data to be fetched and the component to re-render.
		const selectLang = await screen.findByRole('combobox', {
			name: /Select Language/,
		});
		expect(selectLang).toBeInTheDocument();

		// Now that we've *waited* for the component to update, we can check for other elements.
		expect(
			screen.getByRole('combobox', { name: /Select Framework/ })
		).toBeInTheDocument();

		//Check for label and placeholder texts.
		expect(screen.getByText('Select Language…')).toBeInTheDocument();
		expect(screen.getByText('Select Framework…')).toBeInTheDocument();

		// Check if the languages are rendered as options.  We *know* these will be there now.
		expect(screen.getByText('JavaScript')).toBeInTheDocument();
		expect(screen.getByText('PHP')).toBeInTheDocument();
	});

	it('displays an error message on API fetch failure', async () => {
		apiFetchMock.mockRejectedValueOnce(new Error('Test Error'));

		render(<Widget />);

		// Wait for the error message to appear. Use findByText with a regular expression.
		const errorElement = await screen.findByText(/Error: Test Error/);
		expect(errorElement).toBeInTheDocument();
	});

	it('submits the form data correctly and shows success message', async () => {
		// Mock the *first* apiFetch call (initial data fetch) to return the languages.
		apiFetchMock.mockResolvedValueOnce(mockLanguages);
		// Mock the *second* apiFetch call (form submission) to return a success message.
		apiFetchMock.mockResolvedValueOnce({
			message: 'Form submitted successfully!',
		});

		render(<Widget />);

		// Wait for the initial data to load (use findByRole).
		await screen.findByRole('combobox', { name: /Select Language/ });

		// Fill out the form (using getByLabelText for inputs, getByRole for selects)
		fireEvent.change(screen.getByLabelText(/First Name/), {
			target: { value: 'Test' },
		});
		fireEvent.change(screen.getByLabelText(/Last Name/), {
			target: { value: 'User' },
		});
		fireEvent.change(screen.getByLabelText(/Phone Number/), {
			target: { value: '123-456-7890' },
		});
		fireEvent.change(screen.getByLabelText(/Birthdate/), {
			target: { value: '2000-01-01' },
		});
		fireEvent.change(screen.getByLabelText(/Email Address/), {
			target: { value: 'test@example.com' },
		});
		fireEvent.change(screen.getByLabelText(/Country/), {
			target: { value: 'USA' },
		});
		fireEvent.change(screen.getByLabelText(/Short Bio or Resume/), {
			target: { value: 'Test bio' },
		});

		// Select language and framework. Use getByRole.
		fireEvent.change(
			screen.getByRole('combobox', { name: /Select Language/ }),
			{ target: { value: 'JavaScript' } }
		);
		await waitFor(() => {
			expect(screen.queryByText('React')).toBeInTheDocument(); // Find the option, after selecting the language
		});
		fireEvent.change(
			screen.getByRole('combobox', { name: /Select Framework/ }),
			{ target: { value: 'React' } }
		);

		// Submit the form.
		fireEvent.submit(screen.getByRole('form'));

		// Wait for *both* API calls to complete (initial fetch + submission).
		await waitFor(() => expect(apiFetchMock).toHaveBeenCalledTimes(2));

		// Verify that apiFetch was called correctly for the *submission* (the *second* call).
		expect(apiFetchMock).toHaveBeenLastCalledWith({
			path: '/otavio-serra/v1/submit-form',
			method: 'POST',
			data: expect.any(FormData), // Verify it's FormData
		});

		// Get the FormData object from the *second* call to apiFetch (index 1).
		const formData = apiFetchMock.mock.calls[1][0].data; // Second call (index 1)
		expect(formData.get('first_name')).toBe('Test');
		expect(formData.get('last_name')).toBe('User');
		expect(formData.get('phone')).toBe('123-456-7890');
		expect(formData.get('birthdate')).toBe('2000-01-01');
		expect(formData.get('email')).toBe('test@example.com');
		expect(formData.get('country')).toBe('USA');
		expect(formData.get('bioOrResume')).toBe('Test bio');
		expect(formData.get('language')).toBe('JavaScript');
		expect(formData.get('framework')).toBe('React');

		// Wait for the success message to appear.
		await waitFor(() => {
			expect(
				screen.getByText(/Form submitted successfully/)
			).toBeInTheDocument();
		});
	});

	it('handles validation errors', async () => {
		// Mock a successful response for fetching languages (we need the form to render)
		apiFetchMock.mockResolvedValueOnce(mockLanguages);
		render(<Widget />);

		// Wait for the initial data to load
		await screen.findByRole('combobox', { name: /Select Language/ });

		// Submit the form *without* filling in any fields.
		fireEvent.submit(screen.getByRole('form'));

		// Check for error messages.  Use findByText for each.
		expect(
			await screen.findByText('First name is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Last name is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Phone number is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Birthdate is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Email is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Country is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Bio or resume is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Language is required.')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Framework is required.')
		).toBeInTheDocument();
	});
});
