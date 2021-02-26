import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import auth from "../redux/auth.module";
import restaurant from "../redux/restaurant.module"

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    auth,
    restaurant
  });

  // Middleware and store enhancers
  const middlewares = [
    thunk,
    // process.env.NODE_ENV !== "production" && logger,
    // analytics,
  ].filter(Boolean);
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);

  return store;
};

const store = configureStore();

export default store;
