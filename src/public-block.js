import ReactDOM from 'react-dom/client';
import Widget from './components/Widget';
import { config } from './config';

function MyInteractiveComponent() {
	return (
		<div>
			<Widget />
		</div>
	);
}

document.addEventListener('DOMContentLoaded', () => {
	const rootElement = document.getElementById(config.componentRootId);
	if (rootElement) {
		const root = ReactDOM.createRoot(rootElement);
		root.render(<MyInteractiveComponent />);
	}
});
