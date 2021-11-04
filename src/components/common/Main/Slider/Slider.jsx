import React, {useState, useEffect} from 'react'
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import styles from './Slider.module.scss';
import {slidersContent} from './sliderInfo';

export const Slider = () => {
    const [width, setWidth] = useState(688);
    const handleResize = () => {
        switch (true) {
            case window.innerWidth <= 1014:
                setWidth(380);
                break;
            case window.innerWidth <= 1145:
                setWidth(410);
                break;
            case window.innerWidth <= 1285:
                setWidth(500);
                break;
            case window.innerWidth <= 1356:
                setWidth(600);
                break;
            default:
                setWidth(688);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });


    useEffect(() => {
        renewState();
    }, [width]);

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        if (activeIndex === slidersContent.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width
        });
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (slidersContent.length - 1) * width,
                activeIndex: slidersContent.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        });
    }

    const renewState = () => {
        return setState({
            ...state,
            activeIndex: activeIndex,
            translate: activeIndex * width,
        });
    }

    const onPressDot = (activeIndex, index) => {
        setState({
            ...state,
            activeIndex: index,
            translate: index * width
        });
    }

    return (
        <div className={styles.slider}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={window.innerWidth * slidersContent.length}
                content={slidersContent}
            />
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={slidersContent} activeIndex={activeIndex} onPress={onPressDot}/>
        </div>
    );
}

