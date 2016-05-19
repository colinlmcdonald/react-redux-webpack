import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Service from './selection'
import CarList from './carlist'
import { handleChosen, addCarToService, getServices } from './actions'

class CarShop extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addCar = this.addCar.bind(this)
  }

  addCar(e) {
    e.preventDefault()
   const { chosen, dispatch } = this.props
    dispatch(addCarToService())
  }

  handleChange(e, value) {
    this.props.dispatch(handleChosen(value))
  }

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

export default connect(mapStateToProps)(CarShop)


