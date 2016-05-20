import React, { Component } from 'react'
import { render } from 'react-dom'
import Service from './selection'
import CarList from './carlist'

//Constructor is a method on the class object in ES2015. Here we set our initial state and also bind our methods.
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

  //setState triggers a re-render of the component and does not immediately mutate the data.
  addCar(e) {
    e.preventDefault()
    const { chosen } = this.state
    //in ES2015 you can set keys as shown below with [chosen]
    this.setState({ [chosen]: this.state[chosen].concat([chosen])})
  }

  handleChange(e, value) {
    this.setState({chosen: value})
  }

  //onSubmit we are running a function that grabs the event and passes it to handleChange(). The event is represented by 'e'.
  render() {
    return (
      <div>
        <form onSubmit={e => this.addCar(e)}>
        {/* We're mapping over this.state.services and returning a Service component for each service, passing down the service and this component's handleChange() method. It's important to also include a key as React uses this in its diffing algorithm. */}
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




