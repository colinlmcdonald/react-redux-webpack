import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import CarShop from './carshop'
import cars from './reducerCars'
import thunk from 'redux-thunk'

let store = createStore(cars, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <CarShop />
  </Provider>, document.getElementById('app')
)