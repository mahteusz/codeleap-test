import { Thought } from "../redux/reducers/";
import { UpdateThought, ThoughtActionTypes } from "./types"

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

export const updateThought = (id: number, updated: UpdateThought) => {
  return {
    type: ThoughtActionTypes.UPDATE_THOUGHT,
    payload: { id, updated }
  }
}

export const deleteThougt = (id: number) => {
  return {
    type: ThoughtActionTypes.DELETE_THOUGHT,
    payload: id
  }
}