import React from 'react';
import styles from '../../../../pages/index.module.scss';

const Slide = ({content, title, subtitle, but}) => {
    return (
        <div className={styles.slide}
             style={{background: `url(${content})`,}}>
            <div className={styles.slide__background}/>
            <article className={styles.slide__content}>
                <h2 className={styles.slide__title}>{title}</h2>
                <p className={styles.slide__subtitle}>{subtitle}</p>
                <button className={styles.slide__button} style={{background: `${but}`}}>Подробнее</button>
            </article>
        </div>
    )
}

export default Slide;