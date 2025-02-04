import { createElement, createRoot } from '@wordpress/element';
import Widget from './components/Widget.jsx';
import { config } from './config';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.' + config.componentClassId);

    blocks.forEach((block) => {
        const blockRoot = block.querySelector(
            '[id^="' + config.componentRootId + '-"]'
        );

        if (blockRoot) {
            const reactRootContainer = document.createElement('div');
            reactRootContainer.classList.add('react-root');
            blockRoot.appendChild(reactRootContainer);

            const root = createRoot(reactRootContainer);
            root.render(createElement(Widget, {}));
        }
    });
});
