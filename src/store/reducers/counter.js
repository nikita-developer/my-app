import {COUNTER_ADD, COUNTER_SUB, COUNTER_RESET, COUNTER_RANDOM} from '../actions/actionTypes'

const initialState = {
    counter: 0
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        case COUNTER_ADD:
            return {
                counter: state.counter + 1
            }
        case COUNTER_SUB:
            return {
                counter: state.counter - 1
            }
        case COUNTER_RESET:
            return {
                counter: state.counter = 0
            }
        case COUNTER_RANDOM:
            return {
                counter: state.counter + +action.payload
            }
        default: return state
    }
}