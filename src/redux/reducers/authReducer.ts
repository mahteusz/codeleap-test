import { Actions } from "../../actions/types"
import { User } from "./types"

const initialState: User = {
  username: null
}

const authReducer = (state: User = initialState, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return {
        username: action.payload.username
      }
    
    case "LOGOUT":
      return {
        username: null
      }
  
    default:
      return state
  }
}

export default authReducer