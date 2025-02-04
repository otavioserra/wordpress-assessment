import { createElement } from '@wordpress/element';
import { createRoot } from 'react-dom/client';
import Widget from './components/Widget';
import { config } from './config';

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll(config.componentRootId);

    blocks.forEach((block) => {
        const reactRootContainer = document.createElement('div');
        reactRootContainer.classList.add('react-root');
        block.appendChild(reactRootContainer);

        const root = createRoot(reactRootContainer);

        root.render(createElement(Widget));
    });
});
