import React from 'react'
import Car from './car'

const CarList = ({cars, service}) => (
  <div>{service}
    <div>
      {cars.map((car) => {
        return <Car car={car} />
      })}
    </div>
  </div>
)

export default CarList