// Import both createElement and createRoot in a single line
import { createElement, createRoot } from '@wordpress/element';

// Import your main React component
import Widget from './components/Widget';

document.addEventListener('DOMContentLoaded', () => {
	const blockContainers = document.querySelectorAll(
		'.otavio-serra-block-container'
	);

	blockContainers.forEach((container) => {
		const blockId = container.id;
		const attributes =
			window.otavioSerraBlockData && window.otavioSerraBlockData[blockId]
				? window.otavioSerraBlockData[blockId]
				: {};

		const root = createRoot(container);
		root.render(createElement(Widget, { ...attributes, blockId }));
	});
});
