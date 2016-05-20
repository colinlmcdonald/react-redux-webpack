import React from 'react'
import Car from './car'

const CarList = ({cars, service}) => (
  <div>{service}
    <div>
      {cars.map((car, i) => {
        return <Car car={car} key={i}/>
      })}
    </div>
  </div>
)

export default CarList