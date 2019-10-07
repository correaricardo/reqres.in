import { combineReducers } from 'redux'
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';
 
const rootReducer =  combineReducers({
    users: usersReducer,
    modal: modalReducer
})

export default rootReducer;