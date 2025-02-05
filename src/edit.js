import { useBlockProps } from '@wordpress/block-editor';
import Widget from './components/Widget';
import './editor.scss';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			<Widget />
		</p>
	);
}
