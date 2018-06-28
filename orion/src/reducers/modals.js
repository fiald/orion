// action types
import { HANDLE_CHANGE_MODAL } from '../actions/types'
//  modal types
import modalTypes from '../context/modalTypes'
import get from 'lodash/get'

const initialState = {}

Object.keys(modalTypes).forEach(key => {
  initialState[key] = { isOpen: false }
})

export default (state = initialState, action) => {
  const previosValue = get(state[action.payload], 'isOpen', false)
  switch (action.type) {
    case HANDLE_CHANGE_MODAL:
      return {
        ...state,
        [action.payload]: {
          isOpen: !previosValue
        }
      }
    default:
      return state
  }
}
