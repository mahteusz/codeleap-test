import { ThoughtActions } from "../../actions/types"
import { ThoughtState } from "./types"

const initialState: ThoughtState = {
  data: []
}

const thoughtReducer = (state = initialState, action: ThoughtActions) => {
  switch (action.type) {
    case "CREATE_THOUGHT":
      return {
        data: [
          ...state.data,
          {
            id: action.payload.id,
            username: action.payload.username,
            created_datetime: action.payload.created_datetime,
            title: action.payload.title,
            content: action.payload.content
          }
        ]
      }

    default:
      return state
  }
}

export default thoughtReducer