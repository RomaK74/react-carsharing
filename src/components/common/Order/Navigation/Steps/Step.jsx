import styles from '../Navigation.module.scss';
import classNames from 'classnames';
import React from 'react';
import Vector from '../../../../../img/Vector.png';
import {useDispatch, useSelector} from 'react-redux';
import {setStep} from '../../../../../redux/actions/order';
import {selectorCanNext, selectorStep} from '../../../../../redux/reducers/selectors';

let cx = classNames.bind(styles);

export const Step = ({text, curStep}) => {
    const dispatch = useDispatch();
    const step = useSelector(selectorStep);
    const canNext = useSelector(selectorCanNext);
    const classNamesStep = cx({
        [styles.link]: true,
        [styles.active]: curStep === step,
        [styles.filled]: curStep < step
    });
    const changeStep = () => {
        dispatch(setStep(curStep));
    }

    return (
        <li className={styles.points__item}>
            <button onClick={changeStep}
                    className={classNamesStep}
                    disabled={curStep > step && (!canNext || curStep !== step + 1)}>
                {curStep !== 1 &&
                <span className={styles.points__img}>
                    <img src={Vector} alt="next"/></span>}
                {text}
            </button>
        </li>);
}