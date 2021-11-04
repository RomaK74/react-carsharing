import React from 'react';
import styles from './Navigation.module.scss';
import {Step} from './Steps/Step';
import {useSelector} from 'react-redux';
import {selectorIsConfirm} from '../../../../redux/reducers/selectors';

export const Navigation = () => {
    const isConfirm = useSelector(selectorIsConfirm);

    return (
        <nav className={styles.navigation}>
            {isConfirm ?
                <div className={styles.confirm}>Заказ номер RU58491823</div>
                :
                <ul className={styles.points}>
                    <Step text="Местоположение" curStep={1}/>
                    <Step text="Модель" curStep={2}/>
                    <Step text="Дополнительно" curStep={3}/>
                    <Step text="Итого" curStep={4}/>
                </ul>}
        </nav>
    )
}