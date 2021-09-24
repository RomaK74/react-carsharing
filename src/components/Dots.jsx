import React from 'react'

const Dot = ({active, onPress, index, activeIndex}) => (
    <span className="dots__dot" style={active ? {background: '#0EC261'} : {background: 'white'}} onClick={() => onPress(activeIndex, index)}/>
)

const Dots = ({slides, activeIndex, onPress}) => {
    return (
        <div className="slider__dots dots">
            {slides.map((slide, i) => (
                <Dot key={slide.slide} active={activeIndex === i} onPress={onPress} index={i} activeIndex={activeIndex}/>
            ))}
        </div>)
}

export default Dots;