import React, { useState, useContext } from 'react'
import IngredientContext from '../../context/ingredient/ingredientContext'

const NewIngredient = () => {
  const [name, setName] = useState('')
  const ingredientContext = useContext(IngredientContext)
  const { result, addIngredient } = ingredientContext
  const onSubmit = e => {
    e.preventDefault()
    addIngredient(name)
  }

  const onChange = e => {
    setName(e.target.value)
  }
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Add new ingredient</h2>
        <p>{result && result}</p>
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="name"
              placeholder="Ingredient name"
              className="validate"
              value={name}
              onChange={onChange}
            />
            <label htmlFor="name">Name</label>
            <input type="submit" value="Submit" className="btn" required />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewIngredient
