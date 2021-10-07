import React from 'react';
import styles from './Loader.module.scss';

export const Loader = () => (
    <div className={styles['lds-ring']}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
);
