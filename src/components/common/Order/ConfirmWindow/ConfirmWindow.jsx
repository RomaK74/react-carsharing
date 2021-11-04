import React from 'react';
import classNames from "classnames";
import styles from './ConfirmWindow.module.scss';
import {useDispatch} from 'react-redux';
import {setConfirm} from '../../../../redux/actions/order';

export const ConfirmWindow = ({setIsConfirmWindow}) => {
    const dispatch = useDispatch();
    const confirm = () => {
        dispatch(setConfirm(true));
        setIsConfirmWindow(false);
    }

    return (
        <div className={styles.confirm}>
            <div className={styles.confirm__form}>
                <div className={styles.question}>Подтвердить заказ?</div>
                <div className={styles.buttons}>
                    <button className={classNames(styles.yes, styles.button)}
                            onClick={confirm}>Подтвердить
                    </button>
                    <button className={classNames(styles.no, styles.button)}
                            onClick={() => setIsConfirmWindow(false)}>Вернуться
                    </button>
                </div>
            </div>
        </div>
    )
}