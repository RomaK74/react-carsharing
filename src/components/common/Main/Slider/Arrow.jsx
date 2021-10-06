import React from 'react'
import {arrows} from './sliderInfo';
import styles from './Slider.module.scss';
import classNames from 'classnames';

const Arrow = ({direction, handleClick}) => (
    <div className={styles.container} onClick={handleClick}>
        <div
            className={direction === "right" ? classNames(styles.container__arrow, styles.right) : classNames(styles.container__arrow, styles.left)}>
            <img src={direction === 'right' ? arrows[0] : arrows[1]}
                 alt="arrow"/>
        </div>
        <div className={direction === "right" ? classNames(styles['container__arrow-line'], styles.right) :
            classNames(styles['container__arrow-line'], styles.left)}/>
    </div>
);

export default Arrow;