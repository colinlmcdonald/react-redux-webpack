import React from 'react'

const Service = ({service, handleChange, chosen}) => (
  <div>
    <input type='radio' onChange={e => handleChange(e, service)} /> {service}
  </div>
)

export default Service
