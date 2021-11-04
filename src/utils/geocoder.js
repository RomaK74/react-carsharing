import {setCoordinates, setPointsForMap} from "../redux/actions/order";
import axios from "axios";

const getPointsCoords = async (point) => {
    let address = await axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=${process.env.REACT_APP_KEY}&geocode=${point.cityId.name},${point.name}`);
    let pp = await address.data.split('<pos>')[1].split('</pos>')[0].split(' ');
    let res = await pp.map(parseFloat);
    [res[0], res[1]] = [res[1], res[0]];
    res[2] = point.name;
    return res;
}

const getCitiesCoords = async (city) => {
    let address = await axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=${process.env.REACT_APP_KEY}&geocode=${city}`);
    let pp = address.data.split('<pos>')[1].split('</pos>')[0].split(' ');
    let res = pp.map(parseFloat);
    [res[0], res[1]] = [res[1], res[0]];
    return res;
}

export const getPoints = async (points, dispatch) => {
    for (let i = 0; i < points.length; i++) {
        if (points[i].cityId) {
            let res = await getPointsCoords(points[i]);
            await dispatch(setPointsForMap(res));
        }
    }
}

export const getCity = async (city, dispatch) => {
    let res = await getCitiesCoords(city, dispatch);
    await dispatch(setCoordinates(res));
}