import { createStore, combineReducers, applyMiddleware } from 'redux';
import filterReducer from './filterReducer';
import { todoReducer } from './todoReducer';
import { storageMiddleware } from './middleware';

const store = createStore(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  combineReducers({
    todoReducer,
    filterReducer,
  }),
  applyMiddleware(storageMiddleware)
);

export default store;
