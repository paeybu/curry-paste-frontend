import { SET_RESULT, GET_CURRIES, CLEAR_CURRIES } from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload
      }
    case GET_CURRIES:
      return {
        ...state,
        curries: [...state.curries, ...action.payload]
      }
    case CLEAR_CURRIES:
      return {
        ...state,
        curries: []
      }
    default:
      return state
  }
}
