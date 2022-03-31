import {AUTHORIZATION} from "../actions/actionTypes"

const initialState = {
    auth: '0'
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case AUTHORIZATION:
            return {
                auth: state.auth = '12'
            }
        default: return state
    }
}