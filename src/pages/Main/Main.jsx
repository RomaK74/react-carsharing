import React, {useState} from 'react';
import styles from './index.module.scss';
import {Slider} from '../../components/common/Main/Slider/Slider';
import {Loader} from '../../components/ui/Loader/Loader';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../redux/actions/main';
import classNames from 'classnames';
import {Header} from '../../components/ui/Header/Header';

export const Main = ({isMenu, setMenu}) => {
    const dispatch = useDispatch();
    let isLoader = useSelector(state => state.main.isLoading);
    const onClickOrderButton = () => {
        dispatch(setLoading(true));
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Header isMenu={isMenu} setMenu={setMenu}/>
                <section className={styles.content__center}>
                    <div className={styles.content__title}>Каршеринг</div>
                    <div className={classNames(styles.content__subtitle)}>Need for drive</div>
                    <div className={styles.content__text}>Поминутная аренда авто твоего города</div>
                    <Link to="/react-carsharing/order">
                        <button className={styles.content__button}
                                onClick={onClickOrderButton}>{!isLoader ? 'Забронировать' :
                            <Loader/>}
                        </button>
                    </Link>
                </section>
                <footer className={styles.content__down}>
                    <div className={styles.copyright}>© 2016-2019 «Need for drive»</div>
                    <div className={styles.phone}><a href="tel:+74952342244">8 (495) 234-22-44</a></div>
                </footer>
            </div>
            <div className={styles['slider-container']}>
                <Slider/>
            </div>
        </div>
    );
}