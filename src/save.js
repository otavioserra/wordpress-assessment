import { useBlockProps } from '@wordpress/block-editor';
import { config } from './config';

export default function Save() {
	return (
		<div {...useBlockProps.save()} className={config.componentClassId}>
			<div className={config.componentContainerClass}></div>
		</div>
	);
}