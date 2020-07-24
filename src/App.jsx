import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Buyer from './pages/Buyer'
import Seller from './pages/Seller'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <header>
        <nav>
              <Link to="/">Go Home</Link>
              <Link to="/buyer">Buyer</Link>
              <Link to="/seller">Seller</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/buyer" component={Buyer}></Route>
        <Route exact path="/seller" component={Seller}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
