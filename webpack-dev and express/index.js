import React, { Component } from 'react'
import { render } from 'react-dom'

class HelloWorld extends Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))