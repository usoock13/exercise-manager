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

const reducer = combineReducers({
    store,
    counter
})
const makeStore = (context) => createStore(reducer);
export const wrapper = createWrapper(makeStore, { debug: true });
export default reducer;

// export const wrapper = createWrapper(combineReducers({
//     store,
//     counter
// }))