import { SET_SELECTED, REMOVE_SELECTED } from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_SELECTED:
      if (!state.selected.includes(action.payload)) {
        return {
          ...state,
          selected: [...state.selected, action.payload]
        }
      } else {
        return {
          ...state,
          selected: [...state.selected]
        }
      }
    case REMOVE_SELECTED:
      let index = null
      let selected = [...state.selected]
      index = selected.findIndex(item => item === action.payload)
      console.log(selected.splice(index))

      return {
        ...state,
        selected
      }
    default:
      return state
  }
}
