import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Service from './selection'
import CarList from './carlist'
import { handleChosen, addCarToService, getServices } from './actions'

//React class Component which gives our component to the React lifecycle methods.
//We use the constructor method on the class object to handle our binding.
class CarShop extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addCar = this.addCar.bind(this)
  }

  addCar(e) {
    e.preventDefault()
    //Dispatch sends an action creator to the store. This action creator returns an action object.
   const { chosen, dispatch } = this.props
    dispatch(addCarToService())
  }

  handleChange(e, value) {
    this.props.dispatch(handleChosen(value))
  }

  //componentWillMount is a lifecycle method. Before the component is mounted, we dispatch an action creator
  //which makes a call to our server. We need the thunk middleware because it returns a promise, which is a function,
  //and native dispatch only accepts action objects.
  componentWillMount() {
    this.props.dispatch(getServices())
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.addCar(e)}>
        {this.props.services.map((service, i) => {
          return <Service key={i} service={service} handleChange={this.handleChange} />
        })}
        <input type='submit' value='Add Car' />
        </form>
        <div>
          {this.props.services.map((service, i) => {
              return <CarList service={service} cars={[this.props[service]]} key={i}/>
            })}
        </div>
      </div>
    )
  }
}

//We're literally mapping the state, which we receive from the store, to the props of this component.
//The object that we return from this function will be available on this.props, i.e. this.props.services, 
//this.props.chosen, etc.
function mapStateToProps(state) {
  const services = state.services
  const chosen = state.chosen
  if (services.length) {
    let serviceOptions
    services.forEach(service => {
      serviceOptions = Object.assign({}, serviceOptions, {
        [service]: state[service],
        services,
        chosen
      })
    })
    return serviceOptions
  } else {
    return {
      services,
      chosen
    }
  }
}

//Connect is a method from react-redux. This is what connects our different components to the store so
//that they can see the new state that is returned.
export default connect(mapStateToProps)(CarShop)


