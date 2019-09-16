import React, { useReducer } from 'react'
import CurryContext from './curryContext'
import curryReducer from './curryReducer'
import axios from 'axios'

import { SET_RESULT, GET_CURRIES, CLEAR_CURRIES } from '../types'

const CurryState = props => {
  const initialState = {
    result: null,
    curries: []
  }

  const [state, dispatch] = useReducer(curryReducer, initialState)

  // Actions

  // Get curries
  const getCurries = async () => {
    try {
      let res = await axios.get(
        'http://localhost:5000/curries?expand=ingredients'
      )
      dispatch({ type: GET_CURRIES, payload: res.data })
    } catch (err) {
      dispatch({ type: SET_RESULT, payload: err.response.data })
    }
  }

  // Clear Curries
  const clearCurries = () => {
    dispatch({ type: CLEAR_CURRIES })
  }

  return (
    <CurryContext.Provider
      value={{
        result: state.result,
        curries: state.curries,
        getCurries,
        clearCurries
      }}
    >
      {props.children}
    </CurryContext.Provider>
  )
}
export default CurryState
