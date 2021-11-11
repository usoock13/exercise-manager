import { createAction } from 'redux-actions';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createStore } from 'redux';

export const initialState = {
    counters : [
        {
            "counter_author": "usoock",
            "counter_id": "153",
            "counter_array": [
                {
                    "number": 1,
                    "info": ""
                },
                {
                    "number": 2,
                    "info": ""
                },
                {
                    "number": 3,
                    "info": ""
                },
                {
                    "number": 1,
                    "info": ""
                },
                {
                    "number": 2,
                    "info": ""
                },
                {
                    "number": 3,
                    "info": ""
                }
            ],
            "counter_name": "제비 카운터"
        },
        {
            "counter_author": "usoock",
            "counter_id": "265",
            "counter_array": [
                {
                    "number": 12,
                    "info": "공중제비 1세트"
                },
                {
                    "number": 12,
                    "info": "다리후리기 1세트"
                },
                {
                    "number": 12,
                    "info": "공중제비 2세트"
                },
                {
                    "number": 12,
                    "info": "다리후리기 2세트"
                },
                {
                    "number": 12,
                    "info": "공중제비 3세트"
                },
                {
                    "number": 12,
                    "info": "다리후리기 3세트"
                }
            ],
            "counter_name": "12-3 순차 카운터"
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
// ↓ getServerSideProps에서의 store 사용을 위한 wrapping
// const makeStore = (context) => createStore(reducer);
// export const wrapper = createWrapper(makeStore, { debug: true });