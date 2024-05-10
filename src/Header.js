import React from 'react'

function Header({isDarkMode, name, handleClick}) {
  return (
    <div style={{display: 'flex', justifyContent: 'right'}} className={isDarkMode? 'dark mode' : 'light mode'}>
      <button style={{margin: 10}} id='darkmode' onClick={handleClick} name="toggle">{isDarkMode? 'Light mode' : 'Dark mode'}</button>
    </div>
  )
}

export default Header