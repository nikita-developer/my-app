
const initialState = {
    counter2: 0
}

export default function counter2(state = initialState, action) {
    switch(action.type) {
        case 'COUNTER2_ADD':
            return {
                counter2: state.counter2 + 1
            }
        default: return state
    }
}
