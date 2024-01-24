import React from 'react'

function Header({mode, name, handleClick}) {

  return (

    <div className={mode}>Header
      <img src="" alt="Logo" />
      <p>{name}</p>
      <button onClick={handleClick} name="toggle">{mode}</button>
    </div>
  )
}

export default Header