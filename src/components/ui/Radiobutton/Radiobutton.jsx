import React from "react";
import styles from './Radiobutton.module.scss';

export const Radiobutton = ({id, value, name, handleChange}) => {
    return (
        <div className={styles.radiobutton}>
            <input
                id={id}
                value={value}
                name={name}
                type="radio"
                onChange={handleChange}
            />
            <label htmlFor={id}>{value}</label>
        </div>
    )
}