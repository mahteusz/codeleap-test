import { Thought } from "../redux/reducers/types";
import { ThoughtActionTypes } from "./types";

export const createThought = (thought: Thought) => {
  return {
    type: ThoughtActionTypes.CREATE_THOUGHT,
    payload: thought
  }
}

export const readThoughts = (thoughts: Thought[]) => {
  return {
    type: ThoughtActionTypes.READ_THOUGHTS,
    payload: thoughts
  }
}
