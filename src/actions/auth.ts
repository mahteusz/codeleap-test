import { User } from "../redux/reducers/types";
import { ActionTypes } from "./types";

export const login = (user: User) => {
  return {
    type: ActionTypes.LOGIN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  }
}
