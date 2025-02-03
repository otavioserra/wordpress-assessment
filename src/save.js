import { useBlockProps } from '@wordpress/block-editor';
import Widget from './components/Widget';
import './editor.scss';
import './style.scss';

export default function Save() {
	const blockProps = useBlockProps.save();
	return (
		<p {...blockProps}>
			<Widget />
		</p>
	);
}
