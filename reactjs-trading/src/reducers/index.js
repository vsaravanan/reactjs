import { combineReducers } from 'redux';
import stateReducer from 'reducers/state-reducer';

const allReducers = {
    states: stateReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;