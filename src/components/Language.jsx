import React from 'react';

export const Language = () => {
    const [language, setLanguage] = React.useState('Rus');
    const changeLanguage = () => {
        language === 'Eng' ? setLanguage('Rus') : setLanguage('Eng');
    }

    return (
        <div className="language" onClick={changeLanguage}>{language}</div>
    );
}