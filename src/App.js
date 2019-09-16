import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './components/layout/Navbar'
import Ingredients from './components/ingredients/Ingredients'
import Curries from './components/curries/Curries'
import NewIngredient from './components/ingredients/NewIngredient'
import IngredientState from './context/ingredient/IngredientState'
import CurryState from './context/curry/CurryState'

function App() {
  return (
    <IngredientState>
      <CurryState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Curries}></Route>
              <Route exact path="/ingredients" component={Ingredients}></Route>
              <Route
                exact
                path="/ingredients/new"
                component={NewIngredient}
              ></Route>
            </Switch>
          </div>
        </Router>
      </CurryState>
    </IngredientState>
  )
}

export default App
