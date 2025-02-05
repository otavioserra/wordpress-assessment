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
	errorLanguage,
	errorFramework,
}) {
	const [languageSelected, setLanguageSelected] = useState(false); // Initialize with labelLanguage
	const [frameworks, setFrameworks] = useState([]); // Add frameworks state
	const [frameworkSelected, setFrameworkSelected] = useState(false); // Initialize framework

	function handleLanguageChange(event) {
		const selectedLanguage = event.target.value;
		setLanguageSelected(selectedLanguage);

		let newFrameworks = [];
		fields.forEach((option) => {
			if (option.language === selectedLanguage) {
				newFrameworks = option.frameworks;
				return false;
			}

			return true;
		});

		setFrameworks(newFrameworks); // Update the frameworks state
	}

	function handleFrameworkChange(event) {
		const selectedFramework = event.target.value;
		setFrameworkSelected(selectedFramework);
	}
	const classNameLanguage =
		'wa-select wa-select-margin' +
		(languageSelected === labelLanguage || !languageSelected
			? ' wp-select-no-option'
			: '') +
		(errorLanguage ? ' wa-input-error' : '');

	const classNameFramework =
		'wa-select' +
		(frameworkSelected === labelFramework || !frameworkSelected
			? ' wp-select-no-option'
			: '') +
		(errorFramework ? ' wa-input-error' : '');

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
					<option key={option.language} value={option.language}>
						{option.language}
					</option>
				))}
			</select>
			{errorLanguage && (
				<div className="error-message">{errorLanguage}</div>
			)}
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
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					{errorFramework && (
						<div className="error-message">{errorFramework}</div>
					)}
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
