import React from 'react'
import styles from './Slider.module.scss';
import classNames from 'classnames';

const Dot = ({active, onPress, index, activeIndex}) => (
    <span className={classNames(styles.dots__dot, {[styles['active']]: active})}
          onClick={() => onPress(activeIndex, index)}/>
);

const Dots = ({slides, activeIndex, onPress}) => (
    <div className={classNames(styles.slider__dots, styles.dots)}>
        {slides.map((slide, i) => (
            <Dot key={slide.slide} active={activeIndex === i} onPress={onPress} index={i} activeIndex={activeIndex}/>
        ))}
    </div>
);

export default Dots;