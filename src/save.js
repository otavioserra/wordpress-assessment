import { config } from './config';

export default function Save() {
	return (
		<div className={config.componentClassId}>
			<div id={config.componentRootId}></div>
		</div>
	);
}
