import React from 'react'

function Header({isDarkMode, name, handleClick}) {

  return (

    <div className={isDarkMode? 'dark mode' : 'light mode'}>
      <button id='darkmode' onClick={handleClick} name="toggle">{isDarkMode? 'Light mode' : 'Dark mode'}</button>
    </div>
  )
}

export default Header