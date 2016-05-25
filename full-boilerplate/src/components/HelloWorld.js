import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getHelloWorld } from '../../actions/actions'

const divStyle = {
  fontSize: '60px'
}

class HelloWorld extends Component {

  componentWillMount() {
    this.props.dispatch(getHelloWorld())
  }

  render() {
    return (
      <div style={divStyle}>
        {this.props.hello}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const hello = state.greeting.hello
  return {
    hello
  } 
}

export default connect(mapStateToProps)(HelloWorld)


