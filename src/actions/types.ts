import { User } from "../redux/reducers/types";

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

type LoginAction = {
  type: ActionTypes.LOGIN,
  payload: User
}

type LogoutAction = {
  type: ActionTypes.LOGOUT
}

export type Actions = LoginAction | LogoutAction