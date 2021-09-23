import { combineReducers } from 'redux';
import counter from './counter';
import { HYDRATE } from 'next-redux-wrapper';

const store = (state = {}, action) => {
    if(action.type === HYDRATE) {
        return {...state};
    } else {
        return state;
    }
}

export default combineReducers({
    store,
    counter
});