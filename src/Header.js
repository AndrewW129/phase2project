import React from 'react'

function Header({name}) {

  const handleClick = (e) => e.target.textContent === 'Light Mode'? e.target.textContent = 'Dark Mode' : e.target.textContent = 'Light Mode'

  return (

    <div>Header
      <img src="" alt="Logo" />
      <p>{name}</p>
      <button onClick={handleClick}name="toggle">Light Mode</button>
    </div>
  )
}

export default Header