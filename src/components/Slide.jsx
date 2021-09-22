import React from 'react';

const Slide = ({content, title, subtitle, but}) => {
    return (
        <div className="slide"
             style={{background: `url(${content}) 100% 100% no-repeat`, backgroundSize: 'cover'}}>
            <article className="slide__content">
                <h2 className="slide__title">{title}</h2>
                <p className="slide__subtitle">{subtitle}</p>
                <button className="slide__button" style={{background: `${but}`}}>Подробнее</button>
            </article>
        </div>
    )
}

export default Slide;