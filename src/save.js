import { useBlockProps } from '@wordpress/block-editor';
import { config } from './config';

export default function Save({ attributes, clientId }) {
	const blockRootId = `${config.componentRootId}-${clientId}`;

	return (
		<div {...useBlockProps.save()} className={config.componentClassId}>
			<div id={blockRootId}></div>
		</div>
	);
}
