import React from 'react'
import './input.css'

const Input = ({onChangeInput}) => {
    
  return (
    <div className="search_block">
        <img className='img_search_block' src="./img/search.svg" alt="Search" />
    
        <input onChange={onChangeInput} placeholder="Поиск книги или автора…" />
    </div>
  )
}

export default Input;