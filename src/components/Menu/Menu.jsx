import React from "react";
import {Link} from "react-router-dom";
import './Menu.scss';
import { ReactComponent as Instagram } from '../../img/Instagram_white.svg';
import { ReactComponent as Telegram } from '../../img/Telegram_white.svg';
import { ReactComponent as Facebook } from '../../img/Facebook_white.svg';

export const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu__items">
                <Link to="#"><li className="menu__item">ПАРКОВКА</li></Link>
                <Link to="#"><li className="menu__item">СТРАХОВКА</li></Link>
                <Link to="#"><li className="menu__item">БЕНЗИН</li></Link>
                <Link to="#"><li className="menu__item">ОБСЛУЖИВАНИЕ</li></Link>
            </ul>
            <ul className="social-networks">
                <li className="social-networks__item"><Telegram /></li>
                <li className="social-networks__item"><Facebook /></li>
                <li className="social-networks__item"><Instagram /></li>
            </ul>
        </div>)
}