import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getGoodbyeWorld } from '../../actions/actions'

const divStyle = {
  fontSize: '60px'
}

class GoodByeWorld extends Component {

  componentWillMount() {
    this.props.dispatch(getGoodbyeWorld())
  }

  render() {
    return (
      <div style={divStyle}>
        {this.props.goodbye}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const goodbye = state.greeting.goodbye
  return {
    goodbye
  } 
}

export default connect(mapStateToProps)(GoodByeWorld)


