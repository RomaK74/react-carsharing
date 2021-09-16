import React from 'react';
import location from '../../img/location.png';
import './Location.scss';

export const Location = () => {
    return (
        <div className="location">
            <img src={location} alt="Город"/> <span className="location__city">Ульяновск</span>
        </div>
    )
}