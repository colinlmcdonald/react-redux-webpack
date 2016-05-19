import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getHelloWorld } from './actions'

class Index extends Component {

  componentWillMount() {
    this.props.dispatch(getHelloWorld())
  }

  render() {
    return (
      <div>{this.props.hello}</div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  const hello = state.hello
  return {
    hello
  } 
}

export default connect(mapStateToProps)(Index)


