import React from 'react'

//See the carlist file for more information about what is happening here. The only unique thing is that
//we have passed a method from the parent component down (handleChange).
const Service = ({service, handleChange, chosen}) => (
  <div>
    <input type='radio' onChange={e => handleChange(e, service)} /> {service}
  </div>
)

export default Service
