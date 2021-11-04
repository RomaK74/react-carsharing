import React from 'react';
import styles from './Header.module.scss';
import {BurgerMenu} from '../BurgerMenu/BurgerMenu';
import {Location} from '../Location/Location';

export const Header = ({isMenu, setMenu}) => (
    <header className={styles.content__up}>
        <div className={styles.bm}>
            <BurgerMenu
                setMenu={setMenu}
                isMenu={isMenu}/>
        </div>
        <h1 className={styles.title}>Need for drive</h1>
        <div className={styles.break}/>
        <Location/>
    </header>
);
