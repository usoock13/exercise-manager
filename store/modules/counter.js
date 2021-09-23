import { createAction } from 'redux-actions';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
    counters : [
        {
            id: 0,
            name: "20 매칭 카운터",
            counterArray: [19, 1, 18, 2, 17, 3, 16, 4, 15, 5, 14, 6, 13, 7, 12, 8, 11, 9, 10],
            orderReverse: false
        },
        {
            id: 1,
            name: "12회 3세트",
            counterArray: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            orderReverse: false
        }
    ]
}

export const CREATE_COUNTER = 'counter/creactCounter';
export const DELETE_COUNTER = 'counter/deleteCounter';

export const createCounterAction = (counterItem) => ({
    type: CREATE_COUNTER,
    counterItem
})
export const deleteCounterAction = (id) => ({
    type: DELETE_COUNTER,
    id
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_COUNTER :
            return ({
                ...state,
                counters: state.counters.concat(counterItem)
            });
        case DELETE_COUNTER :
            return ({
                ...state,
                counters: state.counters.filter(counter => {
                    return counter.id === action.id;
                })
            });
        default:
            return state;
    }
}

export default reducer;