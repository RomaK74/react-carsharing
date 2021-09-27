import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../redux/actions/main';
import styles from '../../pages/index.module.scss';

export const Language = () => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.main.language);
    const changeLanguage = () =>
        language === 'Rus' ? dispatch(setLanguage('Eng')) : dispatch(setLanguage('Rus'));

    return (
        <div className={styles.language} onClick={changeLanguage}>{language}</div>
    );
}