import React from "react";
import styles from './ModelCard.module.scss';
import {useDispatch} from 'react-redux';
import {setCanNext, setCar} from '../../../../redux/actions/order';
import classNames from 'classnames';

let cx = classNames.bind(styles);

export const ModelCard = ({title, priceMin, priceMax, imgLink, id, handle, isActive}) => {
    const dispatch = useDispatch();
    const chooseCar = (key) => {
        dispatch(setCar(title));
        dispatch(setCanNext(true));
        handle(key);
    }
    const classNamesCar = cx({
        [styles.card]: true,
        [styles.active]: isActive === 'active'
    });

    return (
        <div className={classNamesCar} onClick={() => chooseCar(id)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{priceMin} - {priceMax} ₽</div>
            <div className={styles.image}><img src={imgLink} alt={title}/></div>
        </div>
    )
}