import { useState } from'react';
import { Routes, Route } from 'react-router-dom'
import QuestionsContainer from './QContainer';
import Header from './Header';
import Welcome from './Welcome';
import NavBar from './NavBar';
import './App.css';

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
