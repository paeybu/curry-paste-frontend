import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="row">
        <div className="col s12">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Curry Paste
            </Link>
            <ul className="right">
              <li>
                <Link to="/ingredients">Ingredients</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
