import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [name, setName] = useState('')

  function handleClick() {
    setIsDarkMode(!isDarkMode)
  }

  const mode = isDarkMode? 'dark mode' : 'light mode'

  return (
    <div className={mode}>
      <Header name={name} isDarkMode={isDarkMode} handleClick={handleClick} />
      <Welcome name={name} onNameChange={setName} />
    </div>
  );
}

export default App;
