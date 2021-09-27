import React, {useState} from 'react';
import styles from '../index.module.scss';
import {Slider} from '../../components/common/Main/Slider/Slider';
import {slidersContent} from '../../data/sliderContent';
import {Location} from '../../components/ui/Location/Location';
import {BurgerMenu} from '../../components/ui/BurgerMenu';
import {Loader} from '../../components/ui/Loader/Loader';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../redux/actions/main';
import classNames from 'classnames';

export const Main = ({isMenu, setMenu}) => {
    const dispatch = useDispatch();
    let isLoader = useSelector(state => state.main.isLoading);
    const [widthScreen, setWidthScreen] = useState(window.screen.width);

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <header className={styles.content__up}>
                    {widthScreen < 543 && <div><BurgerMenu setMenu={setMenu} isMenu={isMenu}/></div>}
                    <h1 className={styles.title}>Need for drive</h1>
                    {widthScreen < 543 && <div className={styles.break}/>}
                    <Location/>
                </header>
                <section className={styles.content__center}>
                    <div className={styles.content__title}>Каршеринг</div>
                    <div className={classNames(styles.content__subtitle, styles.title)}>Need for drive</div>
                    <div className={styles.content__text}>Поминутная аренда авто твоего города</div>
                    <Link to="/react-carsharing/order">
                        <button className={styles.content__button}
                                onClick={() => dispatch(setLoading(true))}>{!isLoader ? 'Забронировать' :
                            <Loader/>}</button>
                    </Link>
                </section>
                <footer className={styles.content__down}>
                    <div className={styles.copy}>© 2016-2019 «Need for drive»</div>
                    <div className={styles.tel}><a href="tel:+74952342244">8 (495) 234-22-44</a></div>
                </footer>
            </div>
            <div className={styles['slider-container']}>
                <Slider content={slidersContent} handleWidth={setWidthScreen}/>
            </div>
        </div>
    );
}