import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';
import {ReactComponent as Instagram} from '../../img/Instagram_white.svg';
import {ReactComponent as Telegram} from '../../img/Telegram_white.svg';
import {ReactComponent as Facebook} from '../../img/Facebook_white.svg';
import {Language} from "../Language";

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__items">
                <Link to="#">
                    <li className="menu__item">ПАРКОВКА</li>
                </Link>
                <Link to="#">
                    <li className="menu__item">СТРАХОВКА</li>
                </Link>
                <Link to="#">
                    <li className="menu__item">БЕНЗИН</li>
                </Link>
                <Link to="#">
                    <li className="menu__item">ОБСЛУЖИВАНИЕ</li>
                </Link>
            </ul>
            <ul className="social-networks">
                <a href="https://telegram.org/">
                    <li className="social-networks__item"><Telegram/></li>
                </a>
                <a href="https://www.facebook.com/">
                    <li className="social-networks__item"><Facebook/></li>
                </a>
                <a href="https://www.instagram.com/">
                    <li className="social-networks__item"><Instagram/></li>
                </a>
            </ul>
            <Language />
        </nav>);
}