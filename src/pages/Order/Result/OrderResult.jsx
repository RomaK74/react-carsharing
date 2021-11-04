import React, {useEffect} from 'react';
import styles from './OrderResult.module.scss';
import Car from '../../../img/image-2.png';
import {setStep} from '../../../redux/actions/order';
import {useDispatch, useSelector} from 'react-redux';
import {selectorGlobalCar, selectorIsConfirm} from "../../../redux/reducers/selectors";

export const OrderResult = () => {
    const dispatch = useDispatch();
    const model = useSelector(selectorGlobalCar);
    const isConfirm = useSelector(selectorIsConfirm);
    useEffect(() => {
        dispatch(setStep(4));
    }, []);

    return (
        <div className={styles.result}>
            <div className={styles.result__card}>
                <div className={styles['result__car--description']}>
                    {isConfirm && <div className={styles.confirm}>Ваш заказ подтверждён</div>}
                    <div className={styles.title}>{model}</div>
                    <div className={styles.number}><span>K 761 HA 73</span></div>
                    <div className={styles.fuel}><b>Топливо</b> 100%</div>
                    <div className={styles.date}><b>Доступна</b> с 12.06.2019 12:00</div>
                </div>
                <div className={styles['result__car--image']}>
                    <img src={Car} alt={model}/>
                </div>
            </div>
        </div>
    )
}
