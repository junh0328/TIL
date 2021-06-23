import { combineReducers } from "redux";
import counter from "./Counter";
import sample from "./Sample";

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
