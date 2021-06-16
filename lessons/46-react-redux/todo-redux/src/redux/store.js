import { createStore, combineReducers } from 'redux';
import filterReducer from './filterReducer';
import { todoReducer } from './todoReducer';

const store = createStore(
  combineReducers({
    todoReducer,
    filterReducer,
  })
);

export default store;
