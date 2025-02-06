import { useState, useEffect } from '@wordpress/element';
import Label from './Label';
import Div from './Div';

function Selector({
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
	const [selectedLanguage, setSelectedLanguage] = useState('');
	const [selectedFramework, setSelectedFramework] = useState('');
	const [availableFrameworks, setAvailableFrameworks] = useState([]);

	const languages = fields.map((field) => field.language);

	useEffect(() => {
		if (selectedLanguage) {
			const selectedLanguageData = fields.find(
				(field) => field.language === selectedLanguage
			);
			if (selectedLanguageData) {
				setAvailableFrameworks(selectedLanguageData.frameworks);
			} else {
				setAvailableFrameworks([]);
			}
			setSelectedFramework('');
		} else {
			setAvailableFrameworks([]);
		}
	}, [selectedLanguage, fields]);

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	const handleFrameworkChange = (event) => {
		setSelectedFramework(event.target.value);
	};

	const classLabel = 'wa-label-selected';

	return (
		<Div>
			<Div className="wa-default-container">
				<select
					name={inputLanguage}
					id={inputLanguage}
					className={`wa-select wa-select-margin ${errorLanguage ? 'wa-input-error' : ''}`}
					required={required}
					value={selectedLanguage}
					onChange={handleLanguageChange}
				>
					<option value="" disabled>
						{labelLanguage}
					</option>
					{languages.map((lang) => (
						<option key={lang} value={lang}>
							{lang}
						</option>
					))}
				</select>
				<Label
					htmlFor={inputLanguage}
					className={selectedLanguage !== '' ? classLabel : null}
				>
					{label}
				</Label>
				{errorLanguage && (
					<div className="error-message">{errorLanguage}</div>
				)}
			</Div>
			<Div className="wa-default-container">
				<select
					name={inputFramework}
					id={inputFramework}
					className={`wa-select ${errorFramework ? 'wa-input-error' : ''}`}
					required={required}
					value={selectedFramework}
					onChange={handleFrameworkChange}
				>
					<option value="" disabled>
						{labelFramework}
					</option>
					{availableFrameworks.map((framework) => (
						<option key={framework} value={framework}>
							{framework}
						</option>
					))}
				</select>
				{errorFramework && (
					<div className="error-message">{errorFramework}</div>
				)}
			</Div>
		</Div>
	);
}

export default Selector;
