import { combineReducers } from "redux";
import authReducer from "./authReducer";
import thoughtReducer from "./thoughtReducer";

const reducers = combineReducers({
  auth: authReducer,
  thought: thoughtReducer
})

export type State = ReturnType<typeof reducers>

export default reducers