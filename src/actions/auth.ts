import { User } from "../redux/reducers/";
import { AuthActionTypes } from "./types";

export const login = (user: User) => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  }
}
