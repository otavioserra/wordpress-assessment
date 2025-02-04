import '../editor.scss';

export default function Div({ children, type, className }) {
	let div;

	switch (type) {
		case 'class':
			div = <div className={className}>{children}</div>;
			break;
		case 'cols-2':
			div = <div className="wa-grid-cols-2">{children}</div>;
			break;
		default:
			div = <div className="wa-default-container">{children}</div>;
	}

	return div;
}
