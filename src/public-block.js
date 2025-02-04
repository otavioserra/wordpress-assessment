import { createElement, createRoot } from '@wordpress/element';
import Widget from './components/Widget.jsx';
import { config } from './config';

function renderWidget(container) {
	if (container) {
		const reactRootContainer = document.createElement('div');
		reactRootContainer.classList.add('react-root');
		container.appendChild(reactRootContainer);

		const root = createRoot(reactRootContainer);
		root.render(createElement(Widget));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const blocks = document.querySelectorAll('.' + config.componentClassId);

	blocks.forEach((block) => {
		const container = block.querySelector(
			'.' + config.componentContainerClass
		);
		renderWidget(container);
	});
});
