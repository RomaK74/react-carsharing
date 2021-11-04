import {Map, Placemark, YMaps} from 'react-yandex-maps';
import React, {useEffect} from 'react';
import Point from '../../../../img/Ellipse.png';
import styles from './Map.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getCity, getPoints} from '../../../../utils/geocoder';
import {selectorCity, selectorMapState, selectorPointsForMap} from "../../../../redux/reducers/selectors";

export const Maps = ({points}) => {
    const dispatch = useDispatch();
    const city = useSelector(selectorCity);
    const coordinates = useSelector(selectorMapState);
    const pointsForMap = useSelector(selectorPointsForMap);
    useEffect(() => {
        if (city) {
            getCity(city, dispatch);
        }
    }, [city]);

    useEffect(() => {
        if (points) {
            getPoints(points, dispatch);
        }
    }, []);

    const getPoint = (p) => {

    }

    return (
        <YMaps className={styles.container}>
            <Map state={coordinates} className={styles.map} width="100%" height="100%">
                {
                    pointsForMap.map((point, i) =>
                        (
                            <Placemark key={i} geometry={point}
                                       options={{
                                           iconLayout: 'default#image',
                                           iconImageHref: Point,
                                           iconImageSize: [18, 18],
                                           iconImageOffset: [-9, -9],
                                           iconShape: {
                                               type: 'Circle',
                                               coordinates: [0, 0],
                                               radius: 9
                                           },
                                       }}
                                       onClick={() => getPoint(point)}/>))
                }
            </Map>
        </YMaps>)
}