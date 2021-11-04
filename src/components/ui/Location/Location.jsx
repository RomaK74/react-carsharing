import React from 'react';
import location from '../../../img/location.png';
import styles from './Location.module.scss'

export const Location = () => (
    <address className={styles.location}>
        <img src={location} alt="Город"/>
        <span className={styles.location__city}>Ульяновск</span>
    </address>
);
