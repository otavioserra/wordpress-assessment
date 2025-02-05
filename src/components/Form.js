import '../editor.scss';

export default function Form({ children, ...props }) {
	return (
		<form className="wa-form-container" {...props}>
			{children}
		</form>
	);
}
