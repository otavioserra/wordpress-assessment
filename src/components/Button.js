export default function Button({ type, children }) {
	return (
		<button type={type} className="wa-button">
			{children}
		</button>
	);
}
