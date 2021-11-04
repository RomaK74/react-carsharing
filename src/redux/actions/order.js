export const setCity = (city) => ({
    type: 'SET_CITY',
    payload: city
});

export const setCoordinates = (coord) => ({
    type: 'SET_MAP_CENTER',
    payload: coord
});

export const setPoint = (point) => ({
    type: 'SET_POINT',
    payload: point
});

export const setPointsForMap = (points) => ({
    type: 'SET_POINTS_FOR_MAP',
    payload: points
});

export const setCar = (car) => ({
    type: 'SET_CAR',
    payload: car
});

export const setApiCars = (cars) => ({
    type: 'SET_CARS',
    payload: cars
});

export const setApiCities = (cities) => ({
    type: 'SET_CITIES',
    payload: cities
});

export const setApiPoints = (points) => ({
    type: 'SET_POINTS',
    payload: points
});

export const setStep = (step) => ({
    type: 'SET_STEP',
    payload: step
});

export const setCanNext = (bool) => ({
    type: 'SET_CAN_NEXT',
    payload: bool
});

export const setConfirm = (bool) => ({
    type: 'SET_CONFIRM',
    payload: bool
});