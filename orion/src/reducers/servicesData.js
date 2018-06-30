// action types
import { GET_SERVICES } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
       data: action.payload
      }
    default:
      return state
  }
}
