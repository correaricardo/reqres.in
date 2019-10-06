// General imports
import { createStore } from 'redux'
import { applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
// Import reducer
import {reducer} from '../reducers/index'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;