import { Thought, User } from "../redux/reducers/types";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  CREATE_POST = "CREATE_POST",
  READ_ALL_POSTS = "READ_ALL_POSTS",
  READ_POST = "READ_POST",
  UPDATE_POST = "UPDATE_POST",
  DELETE_POST = "DELETE_POST"
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
  payload: { id: string, post: Partial<Thought> }
}

type DeleteThoughtAction = {
  type: ThoughtActionTypes.DELETE_THOUGHT
  payload: { id: string, post: Thought }
}

export type AuthActions = LoginAction | LogoutAction

export type ThoughtActions =
            CreateThoughtAction |
            ReadAllThoughtsAction |
            UpdateThoughtAction |
            DeleteThoughtAction