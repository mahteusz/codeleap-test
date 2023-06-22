import { Thought } from "../redux/reducers/types";
import { ThoughtActionTypes } from "./types";

export const createThought = (post: Thought) => {
  return {
    type: ThoughtActionTypes.CREATE_THOUGHT,
    payload: post
  }
}
