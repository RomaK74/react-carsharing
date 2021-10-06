import React from 'react';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames';

export const BurgerMenu = ({isMenu, setMenu}) => {
    const handleBM = () => {
        !isMenu ?
            setMenu(true) :
            setMenu(false);
    }

    return <div className={styles['burger-menu']} onClick={handleBM}>
        <div
            className={classNames(styles['burger-menu__line'], styles['burger-menu_first-line'], {[styles['active']]: isMenu})}/>
        <div
            className={classNames(styles['burger-menu__line'], styles['burger-menu_second-line'], {[styles['active']]: isMenu})}/>
        <div
            className={classNames(styles['burger-menu__line'], styles['burger-menu_third-line'], {[styles['active']]: isMenu})}/>
        <div
            className={classNames(styles['burger-menu__line'], styles['burger-menu_forth-line'], {[styles['active']]: isMenu})}/>
    </div>
}
