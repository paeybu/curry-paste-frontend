import React from 'react'

const IngredientItem = ({ ingredient }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <span className="card-title">{ingredient.name}</span>
        </div>
      </div>
    </>
  )
}

export default IngredientItem
