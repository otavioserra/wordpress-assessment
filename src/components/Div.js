import '../editor.scss';

export default function Div({ children, type }) {
	let div;

	switch (type) {
		case 'cols-2':
			div = <div className="wa-grid-cols-2">{children}</div>;
			break;
		default:
			div = <div className="wa-default-container">{children}</div>;
	}

	return div;
}
