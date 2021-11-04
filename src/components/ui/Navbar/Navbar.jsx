import React from 'react';
import {BurgerMenu} from '../BurgerMenu/BurgerMenu';
import {Language} from '../Language/Language';
import styles from './Navbar.module.scss';
import classNames from "classnames";

let cx = classNames.bind(styles);

export const Navbar = ({isMenu, setMenu}) => {
    const classNames = cx({
        [styles['navbar']]: true,
        [styles.dark]: isMenu
    });
    return (
        <div className={classNames}>
            <BurgerMenu setMenu={setMenu} isMenu={isMenu}/>
            {!isMenu && <Language/>}
        </div>
    )
};