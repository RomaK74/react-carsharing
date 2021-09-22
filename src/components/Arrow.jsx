import React from 'react'
import rightArrow from '../img/right-arrow.svg';
import leftArrow from '../img/left-arrow.svg';

function getWindowDimensions() {
    const {innerWidth: width} = window;
    return width;
}

const Arrow = ({direction, handleClick}) => {
    let [width, setWidth] = React.useState(getWindowDimensions);
    const [move, setMove] = React.useState(5);
    React.useEffect(() => {
        setWidth(getWindowDimensions);
        if (width < 1285) {
            setMove(-10);
        }
    }, [width]);


    return (
        <div className="container" onClick={handleClick}>
            <div className="container__arrow"
                 style={(direction === 'right' ? {right: `${move}px`, transform: 'translateX(2)'} : {
                     left: `${move}px`,
                     transform: 'translateX(-2)'
                 })}
            >
                <img src={direction === 'right' ? rightArrow : leftArrow}
                     alt="arrow"/>
            </div>
            <div className="container__arrow-line"
                 style={direction === 'left' ? {left: '0'} : {right: '0'}}
            />
        </div>)
}

export default Arrow;