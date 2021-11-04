import React, {useEffect, useState} from 'react';
import styles from './OrderInformation.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setConfirm, setStep} from '../../../../redux/actions/order';
import classNames from 'classnames';
import {selectorCanNext, selectorIsConfirm, selectorStep} from '../../../../redux/reducers/selectors';

export const OrderInformation = ({globalPoint, globalCity, globalCar, setIsConfirmWindow}) => {
    const dispatch = useDispatch();
    const canNext = useSelector(selectorCanNext);
    const step = useSelector(selectorStep);
    const isConfirm = useSelector(selectorIsConfirm);
    const [buttonText, setButtonText] = useState('Выбрать модель');

    useEffect(() => {
        switch (step) {
            case 1:
                setButtonText('Выбрать модель');
                break;
            case 2:
                setButtonText('Дополнительно');
                break;
            case 3:
                setButtonText('Итого');
                break;
            case 4:
                setButtonText('Заказать');
                break;
            default:
                setButtonText('Выбрать модель');
        }
    }, [step]);

    const nextStep = () => {
        if (step < 4) {
            dispatch(setStep(step + 1));
        } else {
            setIsConfirmWindow(true);
        }
    }

    const resetConfirm = () => {
        dispatch(setConfirm(false));
    }

    return (
        <div className={styles.container}>
            <div className={styles.order__info}>
                <h3 className={styles.order__title}>Ваш заказ</h3>
                <ul>
                    {globalPoint && globalCity && <li><span>Пункт выдачи</span>
                        <div className={styles.dots}/>
                        <span className={styles.property}>{globalCity},</span>
                        <span className={styles.value}>{globalPoint}</span></li>}
                    {globalCar && <li><span>Модель</span>
                        <div className={styles.dots}/>
                        <span className={styles.value}>{globalCar}</span></li>}
                </ul>
                {globalCity && globalPoint && <div className={styles.price}><b>Цена:</b> от 8000 до 12 000 ₽</div>}
                {!isConfirm ?
                    <button className={styles.button} disabled={!canNext} onClick={nextStep}>
                        {buttonText}
                    </button>
                    :
                    <button className={classNames(styles.button, styles.back)} onClick={resetConfirm}>Отменить</button>
                }
            </div>
        </div>)
}