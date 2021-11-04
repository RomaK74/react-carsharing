const initialState = {
    points: [],
    cities: [],
    cars: null,
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POINTS':
            return {
                ...state,
                points: [...state.points, action.payload]
            };
        case 'SET_CITIES':
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload
            };
        default:
            return state;
    }
}

export default data;