import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from './index'
import Reducers from './reducers'

let store = createStore(Reducers)

render(
  <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('app')
)