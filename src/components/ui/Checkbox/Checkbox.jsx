import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = ({name, text}) => (
    <div className={styles.container}>
        <input className={styles.checkbox}
               type="checkbox"
               id={name} name={name}
               value={text}/>
        <label htmlFor={name}><span/>{text}</label>
    </div>
);
