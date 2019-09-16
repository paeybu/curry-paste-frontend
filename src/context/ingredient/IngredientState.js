import React, { useReducer } from 'react'
import IngredientContext from './ingredientContext'
import ingredientReducer from './ingredientReducer'
import { SET_SELECTED, REMOVE_SELECTED } from '../types'

const IngredientState = props => {
  const initialState = {
    result: null,
    ingredients: [
      {
        id: 1,
        name: 'ตะไคร้'
      },
      {
        id: 2,
        name: 'หอมแดง'
      },
      {
        id: 3,
        name: 'กระเทียม'
      },
      {
        id: 4,
        name: 'ข่า'
      },
      {
        id: 5,
        name: 'มะกรูด'
      },
      {
        id: 6,
        name: 'พริกไทย'
      },
      {
        id: 7,
        name: 'กะปิ'
      },
      {
        id: 8,
        name: 'ลูกผักชี'
      },
      {
        id: 9,
        name: 'ยี่หร่าคั่วป่น'
      },
      {
        id: 10,
        name: 'พริกชี้ฟ้าแห้ง'
      },
      {
        id: 11,
        name: 'พริกขี้หนูแห้ง'
      },
      {
        id: 12,
        name: 'พริกชี้ฟ้าเขียว'
      },
      {
        id: 13,
        name: 'ขมิ้น'
      },
      {
        id: 14,
        name: 'กุ้งแห้งป่น'
      },
      {
        id: 15,
        name: 'ถั่วลิสงบด'
      },
      {
        id: 16,
        name: 'พริกขี้หนูแดง'
      },
      {
        id: 17,
        name: 'พริกขี้หนูเขียว'
      },
      {
        id: 18,
        name: 'รากผักชี'
      },
      {
        id: 19,
        name: 'กระชาย'
      },
      {
        id: 20,
        name: 'เนื้อปลาต้ม'
      },
      {
        id: 21,
        name: 'ปลาอินทรีย์เค็ม'
      },
      {
        id: 22,
        name: 'ขมิ้นสด'
      }
    ],
    selected: []
  }

  const [state, dispatch] = useReducer(ingredientReducer, initialState)

  const setSelected = item => {
    dispatch({ type: SET_SELECTED, payload: item })
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
        setSelected,
        removeSelected
      }}
    >
      {props.children}
    </IngredientContext.Provider>
  )
}

export default IngredientState
