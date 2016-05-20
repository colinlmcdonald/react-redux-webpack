import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import CarShop from './carshop'
import cars from './reducerCars'
import thunk from 'redux-thunk'
import 'isomorphic-fetch'


//Use createStore to create your redux store
//In this case since we only have one reducer we pass it in. If you have multiple reducers, 
//use combineReducers instead.
let store = createStore(cars, applyMiddleware(thunk))

//The Provider tag passes the store down implicitly via context. This puts the dispatch method of the store
//on the props of all the elements connected to the component, in this case CarShop, that it wraps.
render(
  <Provider store={store}>
    <CarShop />
  </Provider>, document.getElementById('app')
)