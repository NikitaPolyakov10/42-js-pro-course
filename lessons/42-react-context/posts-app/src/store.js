import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import actions from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(actions);

export default store;
