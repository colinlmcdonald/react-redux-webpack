import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import HelloWorld from './components/HelloWorld'
import GoodbyeWorld from './components/GoodbyeWorld'

export default (
  <Route path='/' component={App}>
    <Route path='hello' component={HelloWorld} />
    <Route path='goodbye' component={GoodbyeWorld} />
  </Route>
)