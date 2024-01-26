import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './QuestionsContainer';
import QuestionList from './QuestionList';
import AddQForm from './AddQForm';
import Leaderboard from './Leaderboard';
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
        <Route path='/' element={<Welcome name={name} onNameChange={setName} />} />
        <Route path='/questions' element={<QuestionList />} />
        <Route path='/addQForm' element={<AddQForm />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
