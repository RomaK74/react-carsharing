import React, {useState, useEffect} from 'react'
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import styles from '../../../../pages/index.module.scss';

export const Slider = ({content, handleWidth}) => {
    const [width, setWidth] = useState(688);
    const [widthScreen, setWidthScreen] = useState(window.screen.width);
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
        handleWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setWidthScreen(window.screen.width);
    });


    useEffect(() => {
        renewState();
    }, [widthScreen]);

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        if (activeIndex === content.length - 1) {
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
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (content.length - 1) * width,
                activeIndex: content.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        })
    }

    const renewState = () => {
        return setState({
            ...state,
            activeIndex: activeIndex,
            translate: activeIndex * width,
        })
    }

    const onPressDot = (activeIndex, index) => {
        setState({
            ...state,
            activeIndex: index,
            translate: index * width
        })
    }

    return (
        <div className={styles.slider}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={widthScreen * content.length}
                content={content}
            />
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={content} activeIndex={activeIndex} onPress={onPressDot}/>
        </div>

    )
}

