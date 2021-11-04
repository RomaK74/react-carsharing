import React, {useEffect} from 'react';
import styles from './OrderLocation.module.scss';
import {Maps} from '../../../components/common/Order/Map/Maps';
import clear from '../../../img/clear.png';
import {setCanNext, setCity, setPoint, setStep} from '../../../redux/actions/order';
import {useDispatch, useSelector} from 'react-redux';
import {getCities, getPoints} from '../../../utils/api';
import {Loader} from '../../../components/ui/Loader/Loader';
import {selectorCities, selectorCity, selectorPoint, selectorPoints} from "../../../redux/reducers/selectors";

export const OrderLocation = () => {
    const dispatch = useDispatch();
    const globalCity = useSelector(selectorCity);
    const globalPoint = useSelector(selectorPoint);
    const cities = useSelector(selectorCities);
    const points = useSelector(selectorPoints);
    const [cityInput, setCityInput] = React.useState('');
    const [pointInput, setPointInput] = React.useState('');

    useEffect(() => {
        dispatch(setStep(1));
        setCityInput(globalCity);
        setPointInput(globalPoint);
        if (!globalCity) {
            dispatch(setCanNext(true)); //false
        } else dispatch(setCanNext(true));
    }, []);

    const onChangeCityInput = (event) => {
        setCityInput(event.target.value);
        if (cities && cities[0].find(city => city.name === event.target.value)) {
            setCityGlobal(event)
        }
    }

    useEffect(async () => {
        if (cities.length === 0) {
            await dispatch(getCities());
        }
        if (!points) {
            await dispatch(getPoints());
        }
    }, [cities, points]);


    const setPointGlobal = (e) => {
        setPointInput(e.target.value);
        dispatch(setPoint(e.target.value));
        dispatch(setCanNext(true));
    }

    const setCityGlobal = (e) => {
        dispatch(setCity(e.target.value));
    }

    const onChangePointInput = (event) => {
        setPointInput(event.target.value);
    }

    const clearCityInput = () => {
        setCityInput('');
        dispatch(setCity(''));
        setPointInput('');
        dispatch(setPoint(''));
        dispatch(setCanNext(false));
    }

    const clearPointInput = () => {
        setPointInput('');
        dispatch(setPoint(''));
        dispatch(setCanNext(false));
    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <label htmlFor="">Город</label>
                <input value={cityInput}
                       list="cities"
                       onChange={onChangeCityInput}
                       type="text"
                       placeholder="Начните вводить город..."/>
                <datalist id="cities" className={styles.datalist}>
                    {
                        cities && cities.map(city =>
                            city.map((c, i) =>
                                <option key={i} onClick={setCityGlobal} value={c.name}/>))
                    }
                </datalist>
                {cityInput && <img onClick={clearCityInput} className={styles.clear} src={clear} alt="clear"/>}
            </div>
            <div className={styles.input}>
                <label htmlFor="">Пункт выдачи</label>
                <input value={pointInput}
                       onInput={setPointGlobal}
                       list="points"
                       onChange={onChangePointInput}
                       type="text"
                       placeholder="Начните вводить пункт..."/>
                <datalist id="points" className={styles.datalist}>
                    {cityInput && points && points.filter(p => cityInput === (p.cityId && p.cityId.name)).map((p, i) =>
                        <option key={i}
                                onClick={e => setPointGlobal(e)}
                                value={p.name}/>)}
                </datalist>
                {pointInput && <img onClick={clearPointInput} className={styles.clear} src={clear} alt="clear"/>}
            </div>
            <div className={styles.map}>
                <div className={styles.map__choose}>Выбрать на карте:</div>
                {<div className={styles['map__yandex-map']}>
                    <Maps points={points} cities={cities}/></div> ||
                <div className={styles.loader}><Loader/></div>}
            </div>
        </div>
    )
}