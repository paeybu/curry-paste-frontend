import React, { useReducer } from 'react'
import IngredientContext from './ingredientContext'
import ingredientReducer from './ingredientReducer'
import qs from 'querystring'
import axios from 'axios'

import {
  ADD_INGREDIENT,
  SET_RESULT,
  GET_INGREDIENTS,
  CLEAR_INGREDIENTS,
  SET_SELECTED,
  CLEAR_SELECTED,
  REMOVE_SELECTED
} from '../types'

const IngredientState = props => {
  const initialState = {
    result: null,
    ingredients: [],
    selected: []
  }

  const [state, dispatch] = useReducer(ingredientReducer, initialState)

  // Actions
  // Get all ingredients
  const getIngredients = async () => {
    try {
      let res = await axios.get('http://localhost:5000/ingredients')
      dispatch({ type: GET_INGREDIENTS, payload: res.data })
    } catch (err) {
      dispatch({ type: SET_RESULT, payload: err.response.data })
    }
  }
  // Add new ingredient
  const addIngredient = async name => {
    const body = {
      name: name
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    try {
      let res = await axios.post(
        'http://localhost:5000/ingredients',
        qs.stringify(body),
        config
      )
      console.log('Added')
      dispatch({ type: ADD_INGREDIENT, payload: res.data })
    } catch (err) {
      // console.dir(err.response)
      dispatch({ type: SET_RESULT, payload: err.response.data })
    }
  }

  const clearIngredients = () => {
    dispatch({ type: CLEAR_INGREDIENTS, payload: [] })
  }

  const setSelected = item => {
    dispatch({ type: SET_SELECTED, payload: item })
  }

  const clearSelected = item => {
    dispatch({ type: CLEAR_SELECTED })
  }

  const removeSelected = item => {
    dispatch({ type: REMOVE_SELECTED, payload: item })
  }

  return (
    <IngredientContext.Provider
      value={{
        result: state.result,
        ingredients: state.ingredients,
        selected: state.selected,
        addIngredient,
        getIngredients,
        clearIngredients,
        setSelected,
        clearSelected,
        removeSelected
      }}
    >
      {props.children}
    </IngredientContext.Provider>
  )
}

export default IngredientState
