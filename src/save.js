import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Word Press Assessment – hello from the saved content!' }
		</p>
	);
}
