const initialState = {
    isMenu: false,
};

const main = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU': {
            return {
                ...state,
                isMenu: action.payload
            };
        }
        default:
            return state;
    }
};

export default main;