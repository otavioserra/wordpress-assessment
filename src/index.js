import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from '../block.json';

registerBlockType(metadata.name, {
	edit: Edit,
	save: Save,
});

// Enqueue script conditionally (only on front end)
if (
	typeof waOtavioSerraPlugin !== 'undefined' &&
	!waOtavioSerraPlugin.isAdmin
) {
	wp.element.useEffect(() => {
		const publicBlockScript = document.createElement('script');
		publicBlockScript.src = `${waOtavioSerraPlugin.pluginUrl}/build/public-block.js`;
		publicBlockScript.type = 'text/javascript';
		document.body.appendChild(publicBlockScript);

		return () => {
			document.body.removeChild(publicBlockScript);
		};
	}, []);
}
