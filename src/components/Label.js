import '../editor.scss';

export default function Label({ htmlFor, children }) {
	return (
		<label htmlFor={htmlFor} className="wa-label">
			{children}
		</label>
	);
}
