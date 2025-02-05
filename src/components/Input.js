import { forwardRef } from '@wordpress/element';
import '../editor.scss';

const Input = forwardRef(
	(
		{
			type = 'text',
			name,
			placeholder,
			required = false,
			error = null,
			key = null,
		},
		ref
	) => {
		let input;
		const className = `wa-input ${error ? 'wa-input-error' : ''}`;

		switch (type) {
			case 'textarea':
				input = (
					<textarea
						name={name}
						id={name}
						className={className}
						placeholder={placeholder}
						required={required}
						ref={ref}
						key={key}
					/>
				);
				break;
			default:
				input = (
					<input
						type={type}
						name={name}
						id={name}
						className={className}
						placeholder={placeholder}
						required={required}
						ref={ref}
						key={key}
					/>
				);
		}

		return (
			<>
				{input}
				{error && <div className="error-message">{error}</div>}
			</>
		);
	}
);
Input.displayName = 'Input'; // Add displayName for better debugging

export default Input;
