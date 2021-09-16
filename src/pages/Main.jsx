import React from 'react';
import './index.scss';
import {Slider} from "../components/Slider";
import {slidersContent} from '../data/sliderContent';
import {Location} from "../components/Location/Location";
import {BurgerMenu} from "../components/BurgerMenu";
import {useSelector} from "react-redux";

export const Main = () => {
    let [widthScreen, setWidthScreen] = React.useState(window.screen.width);

    React.useEffect(() => {
        setWidthScreen(window.screen.width);
    }, []);

    return (
        <div className="main">
            <div className="content">
                <div className="content__up">
                    {widthScreen < 401 && <BurgerMenu />}
                    <h1 className="title">Need for drive</h1>
                    <Location/>
                </div>
                <div className="content__center">
                    <div className="content__title">Каршеринг</div>
                    <div className="content__subtitle title">Need for drive</div>
                    <div className="content__text">Поминутная аренда авто твоего города</div>
                    <button className="content__button">Забронировать</button>
                </div>
                <div className="content__down">
                    <div className="copy">© 2016-2019 «Need for drive»</div>
                    <div className="tel"><a href="tel:+74952342244">8 (495) 234-22-44</a></div>
                </div>
            </div>
            <div className="slider">
                <Slider content={slidersContent}/>
            </div>
        </div>
    )
}