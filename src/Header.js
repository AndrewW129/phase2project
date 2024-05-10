function Header({ isDarkMode, toggleMode }) {
  return (
    <div style={{display: 'flex', justifyContent: 'right'}} className={isDarkMode? 'dark mode' : 'light mode'}>
      <button style={{margin: 10}} id='darkmode' onClick={toggleMode} name="toggle">{isDarkMode? 'Light mode' : 'Dark mode'}</button>
    </div>
  )
}

export default Header