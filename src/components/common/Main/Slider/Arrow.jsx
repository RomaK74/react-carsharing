import React from 'react'
import {arrows} from './sliderInfo';
import styles from './Slider.module.scss';
import classNames from 'classnames';

let cx = classNames.bind(styles);

const Arrow = ({direction, handleClick}) => {
    const classNamesArrows = cx({
        [styles.container__arrow]: true,
        [styles.right]: direction === 'right',
        [styles.left]: direction === 'left'
    });
    const classNamesArrowLines = cx({
        [styles['container__arrow-line']]: true,
        [styles.right]: direction === 'right',
        [styles.left]: direction === 'left'
    });

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={classNamesArrows}>
                <img src={direction === 'right' ? arrows[0] : arrows[1]}
                     alt="arrow"/>
            </div>
            <div className={classNamesArrowLines}/>
        </div>);
}

export default Arrow;