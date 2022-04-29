import { createStore } from "redux";

const questionReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// TODO: Discuss use of createStore
// TODO: Identify Initial State
const store = createStore(questionReducer);
export default store;