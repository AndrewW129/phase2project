import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';

function App() {
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const mode = isDarkMode? 'dark mode' : 'light mode'

  function handleClick() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={mode}>
      <Header mode={mode} name={name} isDarkMode={isDarkMode} handleClick={handleClick} />
      <Welcome onNameChange={setName} />
    </div>
  );
}

export default App;
