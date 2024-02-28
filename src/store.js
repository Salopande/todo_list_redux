import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import TodoReducer from './reducers/TodoReducers';

const reducer = combineReducers({
  Todo:TodoReducer
})

const initialState = {}

const middleWare = [thunk];

const store = createStore(
    reducer, initialState, applyMiddleware(...middleWare)
)

export default store