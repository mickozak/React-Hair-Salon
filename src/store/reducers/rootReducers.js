import authReducers from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducer
})

export default rootReducer