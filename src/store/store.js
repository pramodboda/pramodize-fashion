import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// root-reducer
import { rootReducer } from "./root-reducer";

//middleWares using curring functions
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("nextState:", store.getState());
};

// const middleWares = [logger];
const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// store
export const store = createStore(rootReducer, undefined, composedEnhancers);
