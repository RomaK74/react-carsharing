import React from 'react';
import styles from '../../pages/index.module.scss';
import classNames from "classnames";

export const BurgerMenu = ({isMenu, setMenu}) => {
    const handleBM = () => {
        !isMenu ?
            setMenu(true) :
            setMenu(false);
    }

    return <div className={styles['burger-menu']} onClick={handleBM}>
        <div
            className={!isMenu ? classNames(styles['burger-menu__line'], styles['burger-menu_first-line']) : classNames(styles['burger-menu__line'], styles['burger-menu_first-line'], styles.active)}/>
        <div
            className={!isMenu ? classNames(styles['burger-menu__line'], styles['burger-menu_second-line']) : classNames(styles['burger-menu__line'], styles['burger-menu_second-line'], styles.active)}/>
        <div
            className={!isMenu ? classNames(styles['burger-menu__line'], styles['burger-menu_third-line']) : classNames(styles['burger-menu__line'], styles['burger-menu_third-line'], styles.active)}/>
        <div
            className={!isMenu ? classNames(styles['burger-menu__line'], styles['burger-menu_forth-line']) : classNames(styles['burger-menu__line'], styles['burger-menu_forth-line'], styles.active)}/>
    </div>
}
