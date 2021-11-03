const initialState = {
    isLoading: false,
    language: 'Rus'
};

const main = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case 'SET_LANGUAGE': {
            return {
                ...state,
                language: action.payload,
            }
        }
        default:
            return state;
    }
};

export default main;