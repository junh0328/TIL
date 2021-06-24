import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import counter from "./Counter";
import counterS, { counterSaga } from "./CounterSaga";
import sample from "./Sample";

const rootReducer = combineReducers({
  counter,
  counterS,
  sample,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
