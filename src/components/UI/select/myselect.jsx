import React from 'react'
import './myselect.css'

const Myselect = ({options, defaultValue, value, onChange}) => {
    
  return (
    <select 
      value={value}
      onChange={event => onChange(event.target.value)}
     className='search_select' >
        <option disabled value="">{defaultValue}</option>
        {options.map(option => 
            <option value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}

export default Myselect;