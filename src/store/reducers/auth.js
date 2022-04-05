import { AUTH } from "../actions/actionTypes";

const initialState = {
    auth: false
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case AUTH:
            return {
                auth: state.auth = true
            }
        default: return state
    }
}