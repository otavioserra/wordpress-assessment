export default function Input({ type, name, placeholder, required }) {
	let input;

	switch (type) {
		case 'textarea':
			input = (
				<textarea
					name={name}
					id={name}
					className="wa-input"
					placeholder={placeholder}
					required={required}
				></textarea>
			);
			break;
		default:
			input = (
				<input
					type={type}
					name={name}
					id={name}
					className="wa-input"
					placeholder={placeholder}
					required={required}
				/>
			);
	}

	return input;
}
