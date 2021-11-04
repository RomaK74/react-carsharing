import {combineReducers} from 'redux';

import main from './main';
import order from './order';
import data from "./data";

const rootReducer = combineReducers({
    main,
    order,
    data
});

export default rootReducer;