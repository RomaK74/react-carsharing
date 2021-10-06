import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ReactComponent as Instagram} from '../../../img/Instagram_white.svg';
import {ReactComponent as Telegram} from '../../../img/Telegram_white.svg';
import {ReactComponent as Facebook} from '../../../img/Facebook_white.svg';
import {Language} from '../Language/Language';
import styles from './Menu.module.scss';

const url = '/react-carsharing';
const url2 = '/react-carsharing/';

export const Menu = () => {
    const history = useHistory();
    const path = history.location.pathname;

    return (
        <nav className={styles.menu}>
            <div className={styles.menu__left}>
                <ul className={styles.menu__items}>
                    <li className={styles.menu__item}><Link to="#">ПАРКОВКА</Link></li>
                    <li className={styles.menu__item}><Link to="#">СТРАХОВКА</Link></li>
                    <li className={styles.menu__item}><Link to="#">БЕНЗИН</Link></li>
                    <li className={styles.menu__item}><Link to="#">ОБСЛУЖИВАНИЕ</Link></li>
                </ul>
                <ul className={styles['social-networks']}>
                    <a href="https://telegram.org/">
                        <li className={styles['social-networks__item']}><Telegram/></li>
                    </a>
                    <a href="https://www.facebook.com/">
                        <li className={styles['social-networks__item']}><Facebook/></li>
                    </a>
                    <a href="https://www.instagram.com/">
                        <li className={styles['social-networks__item']}><Instagram/></li>
                    </a>
                </ul>
                <div className={styles.language}><Language/></div>
            </div>
            {(path === url || path === url2) && <div className={styles.menu__right}/>}
        </nav>);
}