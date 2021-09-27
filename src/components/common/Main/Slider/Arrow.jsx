import React from 'react'
import rightArrow from '../../../../img/right-arrow.svg';
import leftArrow from '../../../../img/left-arrow.svg';
import styles from '../../../../pages/index.module.scss';
import classNames from "classnames";

const Arrow = ({direction, handleClick}) => (
    <div className={styles.container} onClick={handleClick}>
        <div
            className={direction === "right" ? classNames(styles.container__arrow, styles.right) : classNames(styles.container__arrow, styles.left)}>
            <img src={direction === 'right' ? rightArrow : leftArrow}
                 alt="arrow"/>
        </div>
        <div className={direction === "right" ? classNames(styles['container__arrow-line'], styles.right) : classNames(styles['container__arrow-line'], styles.left)}/>
    </div>
);

export default Arrow;