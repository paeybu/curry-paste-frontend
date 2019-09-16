import {
  ADD_INGREDIENT,
  SET_RESULT,
  GET_INGREDIENTS,
  CLEAR_INGREDIENTS,
  SET_SELECTED,
  CLEAR_SELECTED,
  REMOVE_SELECTED
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
    case SET_RESULT:
      return {
        ...state,
        result: action.payload
      }
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    case CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      }
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
    case CLEAR_SELECTED:
      return {
        ...state,
        selected: []
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
