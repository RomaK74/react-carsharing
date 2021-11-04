import React, {useEffect, useState} from 'react';
import {ModelCard} from '../../../components/common/Order/Model/ModelCard';
import {getCars} from '../../../utils/api';
import {useDispatch, useSelector} from 'react-redux';
import styles from './OrderModel.module.scss';
import {Radiobutton} from '../../../components/ui/Radiobutton/Radiobutton';
import {Loader} from '../../../components/ui/Loader/Loader';
import {setCanNext, setStep} from '../../../redux/actions/order';
import {selectorCars, selectorGlobalCar} from '../../../redux/reducers/selectors';
import Car from '../../../img/image-1.png'
const baseUrl = "https://api-factory.simbirsoft1.com";

export const OrderModel = () => {
    const [active, setActive] = useState(null);
    const dispatch = useDispatch();
    const cars = useSelector(selectorCars);
    const globalCar = useSelector(selectorGlobalCar);

    useEffect(() => {
        dispatch(setStep(2));
        if (!globalCar)
            dispatch(setCanNext(true)); //false
    }, []);

    useEffect(() => {
        if (!cars) {
            dispatch(getCars());
        }
    }, [cars]);

    const [state, setState] = React.useState({});
    const handleChange = e => {
        const {name, value} = e.target;
        setState({
            [name]: value
        });
    };

    const handle = (key) => {
        setActive(key);
    }

    return (
        <div>
            <div className={styles.radiobuttons}>
                <Radiobutton id="all" value="Все модели" name="model" handleChange={handleChange}/>
                <Radiobutton id="economy" value="Эконом" name="model" handleChange={handleChange}/>
                <Radiobutton id="premium" value="Премиум" name="model" handleChange={handleChange}/>
            </div>
            <div className={styles.cards}>
                {cars ? cars.map((car, i) => (
                    <ModelCard key={i}
                               id={car.id}
                               title={car.name}
                               priceMin={car.priceMin}
                               priceMax={car.priceMax}
                               isActive={car.id === active ? 'active' : ''}
                               handle={handle}
                               imgLink={car.thumbnail.path.includes('base64')
                                   ? car.thumbnail.path
                                   : (baseUrl + car.thumbnail.path)}/>
                )) : <Loader className={styles.loader}/>}
            </div>
        </div>
    );
}