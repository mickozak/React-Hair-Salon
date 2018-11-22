import authReducers from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducers,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer //celem uwierzytelniania, jak się wylogujemy to zaktualizuje stan, ...
})

export default rootReducer