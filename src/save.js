import { useBlockProps } from '@wordpress/block-editor';
import { config } from './config';

export default function Save() {
	const blockRootId = `${config.componentRootId}-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

	return (
		<div {...useBlockProps.save()} className={config.componentClassId}>
			<div id={blockRootId}></div>
		</div>
	);
}
