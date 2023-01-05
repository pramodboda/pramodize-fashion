import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// root-reducer
import { rootReducer } from "./root-reducer";

//middleWares
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:");
};

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// store
export const store = createStore(rootReducer, undefined, composedEnhancers);
