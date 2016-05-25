import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from './routes'
import { Router } from 'react-router'

//Root receives the store and history from index.js and renders all of the different routes in our app
export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    )
  }
}

//This means the store and history are required
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}