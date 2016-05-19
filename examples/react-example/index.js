import React, { Component } from 'react'
import { render } from 'react-dom'
import Service from './selection'
import CarList from './carlist'

class CarShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: ['Car Wash', 'Smog Check', 'Repair'],
      'Car Wash': [],
      'Smog Check': [],
      'Repair': [],
      chosen: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addCar = this.addCar.bind(this)
  }

  addCar(e) {
    e.preventDefault()
    const { chosen } = this.state
    this.setState({ [chosen]: this.state[chosen].concat([chosen])})
  }

  handleChange(e, value) {
    this.setState({chosen: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.addCar(e)}>
        {this.state.services.map((service, i) => {
          return <Service key={i} service={service} handleChange={this.handleChange} />
        })}
        <input type='submit' value='Add Car' />
        </form>
        <div>
          {this.state.services.map((service, i) => {
              return <CarList service={service} cars={[this.state[service]]} key={i}/>
            })}
        </div>
      </div>
    )
  }
}

render(<CarShop/>, document.getElementById('app'))




