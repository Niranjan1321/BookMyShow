import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import { authReducer } from './AuthReducer' 
import thunk from "redux-thunk"

export const store = createStore(authReducer , compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))