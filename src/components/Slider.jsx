import React, {useState} from 'react'
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import {useSelector} from 'react-redux';

export const Slider = ({content}) => {
    let [widthScreen, setWidthScreen] = React.useState(window.screen.width);
    let isMenu = useSelector(state => state.main.isMenu)

    React.useEffect(() => {
        setWidthScreen(window.screen.width);
    }, []);

    let width;
    switch (true) {
        case widthScreen <= 1014:
            width = 380;
            break;
        case widthScreen <= 1145:
            width = 410;
            break;
        case widthScreen <= 1285:
            width = 500;
            break;
        case widthScreen <= 1440:
            width = 600;
            break;
        default:
            width = 688;
    }

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

    return (
        <div className="slider">
            {isMenu && <div className="slider__fone"/>}
            <SliderContent
                translate={translate}
                transition={transition}
                width={widthScreen * content.length}
                content={content}
            />
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={content} activeIndex={activeIndex}/>
        </div>

    )
}

