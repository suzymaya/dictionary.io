import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dict from './modules/dictionary';

const middlewares = [thunk];
const rootReducer = combineReducers({dict})
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;

