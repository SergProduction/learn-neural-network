import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import { Lesson1 } from './less1'



const Menu = () => (
  <div>
    <Link to="/lesson1">lesson 1</Link>
  </div>
)


const Routing = () => (
  <BrowserRouter>
    <Fragment>
    <Menu />
    <Switch>
      <Route path="/lesson1" component={Lesson1} />
    </Switch>
    </Fragment>
  </BrowserRouter>
)

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
)