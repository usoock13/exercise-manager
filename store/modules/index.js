import { combineReducers, createStore } from 'redux';
import counter from './counter';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const store = (state = {}, action) => {
    if(action.type === HYDRATE) {
        return {...state};
    } else {
        return state;
    }
}

const makeStore = (context) => createStore(combineReducers({
    store,
    counter
}));
export const wrapper = createWrapper(makeStore, { debug: true});
export default combineReducers({
    store,
    counter
});

// export const wrapper = createWrapper(combineReducers({
//     store,
//     counter
// }))