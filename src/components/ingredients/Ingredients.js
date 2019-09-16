import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import IngredientContext from '../../context/ingredient/ingredientContext'
import IngredientItem from './IngredientItem'

const Ingredients = () => {
  const ingredientContext = useContext(IngredientContext)
  const { ingredients } = ingredientContext
  return (
    <div className="row">
      <div className="col s12">
        <h3>Ingredients</h3>
        <div className="grid-wrapper">
          {ingredients.map(ingredient => (
            <IngredientItem key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ingredients
