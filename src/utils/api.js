import axios from "axios";
import {setApiCars, setApiCities, setApiPoints} from "../redux/actions/order";

const axiosTemplate = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_KEY_SIMBIRSOFT,
        'Content-Type': 'application/json'
    }
});

export const getCars = () => {
    return (dispatch) => {
        axiosTemplate.get('/db/car?limit=10')
            .then((res) => {
                dispatch(setApiCars(res.data.data));
            })
    }
}

export const getCities = () => {
    return (dispatch) => {
        axiosTemplate.get('/db/city')
            .then((res) => {
                dispatch(setApiCities(res.data.data));
            })
    }
}

export const getPoints = () => {
    return (dispatch) => {
        axiosTemplate.get('/db/point')
            .then((res) => {
                dispatch(setApiPoints(res.data.data));
            })
    }
}