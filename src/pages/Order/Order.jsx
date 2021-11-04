import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../redux/actions/main';
import {Header} from '../../components/ui/Header/Header';
import styles from './index.module.scss';
import {OrderLocation} from './Location/OrderLocation';
import {OrderModel} from './Model/OrderModel';
import {Navigation} from '../../components/common/Order/Navigation/Navigation';
import {OrderAdd} from './Add/OrderAdd';
import {OrderResult} from './Result/OrderResult';
import {OrderInformation} from '../../components/common/Order/OrderInformation/OrderInformation';
import {setStep} from '../../redux/actions/order';
import {selectorCity, selectorGlobalCar, selectorPoint, selectorStep} from "../../redux/reducers/selectors";

export const Order = ({setMenu, isMenu, setIsConfirmWindow}) => {
    const dispatch = useDispatch();
    const step = useSelector(selectorStep);
    const globalCity = useSelector(selectorCity);
    const globalPoint = useSelector(selectorPoint);
    const globalCar = useSelector(selectorGlobalCar);
    useEffect(() => {
        dispatch(setLoading(false));
        dispatch(setStep(1));
    }, [dispatch]);

    return (
        <div className={styles.order}>
            <div className={styles.header}><Header setMenu={setMenu} isMenu={isMenu}/></div>
            <Navigation/>
            <section className={styles.order__container}>
                <div className={styles.order__content}>
                    {step === 1 && <OrderLocation/>}
                    {step === 2 && <OrderModel/>}
                    {step === 3 && <OrderAdd/>}
                    {step === 4 && <OrderResult/>}
                </div>
                <div className={styles.order__information}>
                    <OrderInformation setIsConfirmWindow={setIsConfirmWindow}
                                      globalPoint={globalPoint}
                                      globalCity={globalCity}
                                      globalCar={globalCar}
                    />
                </div>
            </section>
        </div>
    )
}