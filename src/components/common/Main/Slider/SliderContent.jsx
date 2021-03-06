import React from 'react';
import Slide from './Slide';
import styles from './Slider.module.scss';

const SliderContent = ({transition, translate, width, content}) => (
    <div className={styles.slider__content} style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`
    }}>
        {content.map(val => (
            <Slide key={val.slide}
                   content={val.slide}
                   title={val.title}
                   subtitle={val.subtitle}
                   but={val.button}/>
        ))}
    </div>
)

export default SliderContent;