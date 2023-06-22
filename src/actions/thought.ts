import { Thought } from "../redux/reducers/types";
import { UpdateThought } from "./types"
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

export const updateThoughts = (id: number, updated: UpdateThought) => {
  return {
    type: ThoughtActionTypes.UPDATE_THOUGHT,
    payload: {id, updated}
  }
}
