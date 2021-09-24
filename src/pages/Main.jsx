import React from 'react';
import './index.scss';
import {Slider} from '../components/Slider';
import {slidersContent} from '../data/sliderContent';
import {Location} from '../components/Location/Location';
import {BurgerMenu} from '../components/BurgerMenu';
import {Loader} from "../components/Loader/Loader";
import {Link} from "react-router-dom";

export const Main = () => {
    const [widthScreen, setWidthScreen] = React.useState(window.screen.width);
    const [isLoader, setLoader] = React.useState(false);
    React.useEffect(() => {
        setWidthScreen(window.screen.width);
    }, []);

    return (
        <div className="main">
            <div className="content">
                <header className="content__up">
                    {widthScreen < 402 && <BurgerMenu/>}
                    <h1 className="title">Need for drive</h1>
                    <Location/>
                </header>
                <section className="content__center">
                    <div className="content__title">Каршеринг</div>
                    <div className="content__subtitle title">Need for drive</div>
                    <div className="content__text">Поминутная аренда авто твоего города</div>
                    <Link to="/order">
                        <button className="content__button"
                                onClick={() => setLoader(!isLoader)}>{!isLoader ? 'Забронировать' : <Loader/>}</button>
                    </Link>
                </section>
                <footer className="content__down">
                    <div className="copy">© 2016-2019 «Need for drive»</div>
                    <div className="tel"><a href="tel:+74952342244">8 (495) 234-22-44</a></div>
                </footer>
            </div>
            <div className="slider-container">
                <Slider content={slidersContent}/>
            </div>
        </div>
    )
}