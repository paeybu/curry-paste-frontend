import React from 'react'

const CurryItem = ({ curry }) => {
  const { ingredients } = curry
  return (
    <>
      <div className="card hoverable center">
        <div className="card-content">
          <span className="card-title orange-text text-darken-2">
            {curry.name}
          </span>
          <hr />
          {ingredients.map((item, index) => (
            <div className="col s6" key={index}>
              <p style={{ margin: '10px 0' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CurryItem
