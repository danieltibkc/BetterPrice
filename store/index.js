import { applyMiddleware, createStore } from "redux";

const initialState = {
  lat: 0.0,
  long: 0.0,
  numberBedrooms: 1,
  numberBathrooms: 0,
  hasAC: false,
  hasTV: false,
  hasKitchen: false,
  parking: false,
  breakfast: false,
  petfriendly: false,
  gymNearby: false,
};

const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {

  if (typeof action === "function") {
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  return next(action);
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      state = action.payload.predictions;
      return state;
    default:
      return state;
  }
};

// TODO: Discuss use of createStore
const store = createStore(
  questionReducer,
  applyMiddleware(asyncFunctionMiddleware)
);

export default store;
