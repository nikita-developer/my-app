
import {combineReducers} from "redux"

import counter from './counter'
import counter2 from './counter2'
import auth from './auth'

export default combineReducers({
    counter,
    counter2,
    auth,
})