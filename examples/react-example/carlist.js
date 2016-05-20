import React from 'react'
import Car from './car'

//This is an example of a stateless functional React component. It uses the fat arrow function from ES2015
//to return a single node (in this case a <div>). Here JSX is used within the HTML to map over the different
//cars that have been passed down from the parent component. Map returns our Car component, passing in an individual
//car. React uses the 'key' property of a component for its diffing algorithm, so it is important to include it
//for performance reasons.
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

//** Notice that this functional component is being passed {cars, service} as its argument. This is using
//ES2015's object destructuring which takes the object that is passed in from the parent component and makes
//its values available as cars & service.