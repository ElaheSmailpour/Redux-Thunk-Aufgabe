
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import thunk from "redux-thunk"

const Middleware=[thunk]
const composedhancer=composeWithDevTools(applyMiddleware(...Middleware))
applyMiddleware(...Middleware)
const store = createStore(reducer,composedhancer);
export default store 