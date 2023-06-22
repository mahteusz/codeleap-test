import { Thought, User } from "../redux/reducers/types";

export type UpdateThought = {
  title: string,
  content: string
} 

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export enum ThoughtActionTypes {

  CREATE_THOUGHT = "CREATE_THOUGHT",
  READ_THOUGHTS= "READ_THOUGHTS",
  UPDATE_THOUGHT = "UPDATE_THOUGHT",
  DELETE_THOUGHT = "DELETE_THOUGHT"

}


type LoginAction = {
  type: AuthActionTypes.LOGIN,
  payload: User
}

type LogoutAction = {
  type: AuthActionTypes.LOGOUT
}

type CreateThoughtAction = {
  type: ThoughtActionTypes.CREATE_THOUGHT,
  payload: Thought
}

type ReadAllThoughtsAction = {
  type: ThoughtActionTypes.READ_THOUGHTS,
  payload: Thought[]
}

type UpdateThoughtAction = {
  type: ThoughtActionTypes.UPDATE_THOUGHT,
  payload: { id: number, updated: UpdateThought }
}

type DeleteThoughtAction = {
  type: ThoughtActionTypes.DELETE_THOUGHT
  payload: number
}

export type AuthActions = LoginAction | LogoutAction

export type ThoughtActions =
            CreateThoughtAction |
            ReadAllThoughtsAction |
            UpdateThoughtAction |
            DeleteThoughtAction