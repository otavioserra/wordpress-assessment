import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from '../build/block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
