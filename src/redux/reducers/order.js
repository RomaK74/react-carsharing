const initialState = {
    city: '',
    coordinates: [54.3282, 48.3866],
    point: '',
    pointsForMap: [],
    car: '',
    step: 0,
    canNext: false,
    isConfirm: false,
    mapState: {center: [54.3282, 48.3866], zoom: 11}
};

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITY': {
            return {
                ...state,
                city: action.payload
            }
        }
        case 'SET_CONFIRM': {
            return {
                ...state,
                isConfirm: action.payload
            }
        }
        case 'SET_MAP_CENTER': {
            return {
                ...state,
                mapState: {center: action.payload}
            };
        }
        case 'SET_COORDINATES': {
            return {
                ...state,
                city: action.payload
            }
        }
        case 'SET_POINTS_FOR_MAP': {
            return {
                ...state,
                pointsForMap: [...state.pointsForMap, action.payload]
            }
        }
        case 'SET_POINT': {
            return {
                ...state,
                point: action.payload
            }
        }
        case 'SET_CAR': {
            return {
                ...state,
                car: action.payload
            }
        }
        case 'SET_STEP': {
            return {
                ...state,
                step: action.payload
            }
        }
        case 'SET_CAN_NEXT': {
            return {
                ...state,
                canNext: action.payload
            }
        }
        default:
            return state;
    }
};

export default order;