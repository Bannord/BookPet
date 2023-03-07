import React from 'react'
import './myselect.css'

const Myselect = ({options, defaultValue}) => {
    
  return (
    <select className='search_select' >
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