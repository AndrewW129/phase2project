import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import QuestionsContainer from './QuestionsContainer';
import NavBar from './NavBar';
import {Routes, Route} from 'react-router-dom'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleMode() {
    setIsDarkMode(!isDarkMode)
  }

  const mode = isDarkMode? 'dark mode' : 'light mode'

  return (
    <div style={{height: 830}} className={mode}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <NavBar />
      <Routes>
        <Route path='/questions/*' element={<QuestionsContainer />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
