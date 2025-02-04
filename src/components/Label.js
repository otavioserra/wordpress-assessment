import '../editor.scss';

export default function Label({ htmlFor, children, className = '' }) {
	const classNameAux = 'wa-label' + (className ? ' ' + className : '');

	return (
		<label htmlFor={htmlFor} className={classNameAux}>
			{children}
		</label>
	);
}
