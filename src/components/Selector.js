import { useState } from '@wordpress/element';
import Label from './Label';

export default function Selector({
	fields,
	inputLanguage,
	inputFramework,
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

	return (
		<>
			<select
				name={inputLanguage}
				id={inputLanguage}
				className="wa-input"
				required={required}
				onChange={handleLanguageChange}
			>
				{fields.map((option) => (
					<option
						key={option.value}
						value={option.value}
						defaultChecked={
							languageSelected === option.language ? true : false
						}
					>
						{option.label}
					</option>
				))}
			</select>
			<Label htmlFor={inputLanguage}>{labelLanguage}</Label>
			{languageSelected && (
				<>
					<select
						name={inputFramework}
						id={inputFramework}
						className="wa-input"
						required={required}
						onChange={handleFrameworkChange}
					>
						{frameworks.map((option) => (
							<option
								key={option.value}
								value={option.value}
								defaultChecked={
									frameworkSelected === option ? true : false
								}
							>
								{option.label}
							</option>
						))}
					</select>
					<Label htmlFor={inputFramework}>{labelFramework}</Label>
				</>
			)}
		</>
	);
}
