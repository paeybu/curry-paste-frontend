import React, { useEffect, useContext } from 'react'
import CurryContext from '../../context/curry/curryContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import CurryItem from './CurryItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Curries = () => {
  const curryContext = useContext(CurryContext)
  const ingredientContext = useContext(IngredientContext)
  const { curries, getCurries } = curryContext
  const {
    ingredients,
    getIngredients,
    selected,
    setSelected,
    removeSelected
  } = ingredientContext

  useEffect(() => {
    getCurries()
    getIngredients()
    // eslint-disable-next-line
  }, [])

  const selectIngredient = e => {
    const btn = e.target
    btn.classList.toggle('blue')
    if (btn.classList.contains('blue')) {
      setSelected(btn.innerText)
    } else {
      removeSelected(btn.innerText)
    }
  }
  return (
    <>
      <div className="row">
        <div className="col s12">
          <p>Select ingredients here</p>
          {ingredients.map((item, index) => (
            <button
              className="waves-effect waves-light btn-small"
              key={index}
              style={{ margin: '5px' }}
              onClick={selectIngredient}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="grid-wrapper">
            <TransitionGroup component={null}>
              {curries.map(curry => {
                if (selected.every(i => curry.ingredients.includes(i))) {
                  return (
                    <CSSTransition
                      key={curry.id}
                      timeout={300}
                      classNames="item"
                    >
                      <CurryItem curry={curry} />
                    </CSSTransition>
                  )
                }
                return null
              })}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default Curries
