import React from 'react'

function Header({todos}) {
  return (
    
    <h1 className='header-text'>
            Список дел:{todos.length} 
    </h1>
  )
}

export default Header