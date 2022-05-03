import { applyMiddleware, createStore } from "redux";

const initialState = {
  features: {
    lat: 0.0,
    long: 0.0,
    numberBedrooms: "",
    numberBathrooms: "",
    hasAC: false,
    hasTV: false,
    hasKitchen: false,
    parking: false,
    breakfast: false,
    petfriendly: false,
    gymNearby: false,
  },
  predictions: {},
};

const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  if (typeof action === "function") {
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  return next(action);
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD": {
      let predictions = Object.assign(state.predictions, action.payload);
      return { ...state, ...predictions };
    }
    case "UPDATE": {
      const updated = state.features;
      updated[action.payload.attribute] = action.payload.value;

      return {
        ...state,
        features: { ...state.features, ...updated },
      };
    }
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
