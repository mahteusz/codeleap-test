import { ThoughtActions } from "../../actions/types"
import { ThoughtState } from "./types"

const initialState: ThoughtState = {
  data: []
}

const thoughtReducer = (state = initialState, action: ThoughtActions) => {
  switch (action.type) {
    case "CREATE_THOUGHT":
      return {
        ...state,
        data: [
          {
            id: action.payload.id,
            username: action.payload.username,
            created_datetime: action.payload.created_datetime,
            title: action.payload.title,
            content: action.payload.content
          },
          ...state.data
        ]
      }

    case "READ_THOUGHTS":
      return {
        ...state,
        data: [...action.payload]
      }

    case "UPDATE_THOUGHT":
      const index = state.data.findIndex(thought => thought.id === action.payload.id)
      const newThoughts = [...state.data]
      newThoughts[index] = {
        ...newThoughts[index],
        title: action.payload.updated.title,
        content: action.payload.updated.content
      }
      return {
        ...state, newThoughts
      }

    default:
      return state
  }
}

export default thoughtReducer