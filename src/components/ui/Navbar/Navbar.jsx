import React from 'react';
import {BurgerMenu} from '../BurgerMenu/BurgerMenu';
import {Language} from '../Language/Language';
import styles from './Navbar.module.scss';

export const Navbar = ({isMenu, setMenu}) => (
    <div className={styles['navbar']}>
        <BurgerMenu setMenu={setMenu} isMenu={isMenu}/>
        {!isMenu && <Language/>}
    </div>
);