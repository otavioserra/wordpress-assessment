import '../editor.scss';

export default function FormHeader({ children, title }) {
	return (
		<header className="wa-header-container">
			<h3 className="wa-header-title">{title}</h3>
			<p className="wa-header-description">{children}</p>
		</header>
	);
}
