import counterReducer from './Counter'
import loggedInReducer from './IsLogged'
import {combineReducers} from 'redux'

const allReducers=combineReducers({
    counter:counterReducer,
    loggedIn:loggedInReducer
})

export default allReducers