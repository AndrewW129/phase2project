import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import QuestionsContainer from './QuestionsContainer';
import NavBar from './NavBar';
import {Routes, Route} from 'react-router-dom'


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
      <NavBar />
      <Routes>
        <Route path='/questions/*' element={<QuestionsContainer name={name} onNameChange={setName} />} />
        <Route path='/' element={<Welcome name={name} onNameChange={setName} />} />
      </Routes>
    </div>
  );
}

export default App;
