export default function Input({ type, name, placeholder, required, error }) {
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
