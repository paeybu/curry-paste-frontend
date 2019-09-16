import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import IngredientContext from '../../context/ingredient/ingredientContext'
import IngredientItem from './IngredientItem'

const Ingredients = () => {
  const ingredientContext = useContext(IngredientContext)
  const { ingredients, getIngredients, clearIngredients } = ingredientContext
  useEffect(() => {
    getIngredients()
    clearIngredients()
    // eslint-disable-next-line
  }, [])
  return (
    <div className="row">
      <div className="col s12">
        <Link to="/ingredients/new">Add New Ingredient</Link>
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
