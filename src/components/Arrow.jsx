import React from 'react'
import rightArrow from '../img/right-arrow.svg';
import leftArrow from '../img/left-arrow.svg';

const Arrow = ({direction, handleClick}) => {
    let [width, setWidth] = React.useState(window.screen.width);
    React.useEffect(() => {
        setWidth(window.screen.width);
        if (width < 1285)
            setMove(-10);
    }, []);

    const [move, setMove] = React.useState(5);

    return (
        <div className="container" onClick={handleClick}>
            <div className="container__arrow"
                 style={(direction === 'right' ? {right: `${move}px`, transform: 'translateX(2)'} : {
                     left: `${move}px`,
                     transform: 'translateX(-2)'
                 })}
            >
                <img src={direction === 'right' ? rightArrow : leftArrow}
                     alt="right"/>
            </div>
            <div className="container__arrow-line"
                 style={direction === 'left' ? {left: '0'} : {right: '0'}}
            />
        </div>)
}

export default Arrow;