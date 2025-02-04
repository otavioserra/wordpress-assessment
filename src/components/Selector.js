import { useState } from '@wordpress/element';
import Label from './Label';

export default function Selector({
	fields,
	inputLanguage,
	inputFramework,
	label,
	labelLanguage,
	labelFramework,
	required,
}) {
	const [languageSelected, setLanguageSelected] = useState(false);
	const [frameworkSelected, setFrameworkSelected] = useState(false);

	function handleLanguageChange(event) {
		setLanguageSelected(event.target.value);
	}

	function handleFrameworkChange(event) {
		setFrameworkSelected(event.target.value);
	}

	let frameworks = [];

	if (languageSelected) {
		fields.map((option) => {
			if (option.language === languageSelected) {
				frameworks = option.frameworks;
				return false;
			}

			return true;
		});
	}

	const classNameLanguage =
		'wa-select wa-select-margin' +
		(languageSelected === labelLanguage || !languageSelected
			? ' wp-select-no-option'
			: '');
	const classNameFramework =
		'wa-select' +
		(frameworkSelected === labelFramework || !frameworkSelected
			? ' wp-select-no-option'
			: '');

	return (
		<>
			<select
				name={inputLanguage}
				id={inputLanguage}
				className={classNameLanguage}
				required={required}
				onChange={handleLanguageChange}
			>
				<option key={labelLanguage} value={labelLanguage}>
					{labelLanguage}
				</option>
				{fields.map((option) => (
					<option
						key={option.language}
						value={option.language}
						defaultChecked={
							languageSelected === option.language ? true : false
						}
					>
						{option.language}
					</option>
				))}
			</select>
			{frameworks.length > 0 && (
				<>
					<select
						name={inputFramework}
						id={inputFramework}
						className={classNameFramework}
						required={required}
						onChange={handleFrameworkChange}
					>
						<option key={labelFramework} value={labelFramework}>
							{labelFramework}
						</option>
						{frameworks.map((option) => (
							<option
								key={option}
								value={option}
								defaultChecked={
									frameworkSelected === option ? true : false
								}
							>
								{option}
							</option>
						))}
					</select>
				</>
			)}
			<Label
				htmlFor={inputLanguage}
				className={languageSelected ? 'wa-label-selected' : ''}
			>
				{label}
			</Label>
		</>
	);
}
