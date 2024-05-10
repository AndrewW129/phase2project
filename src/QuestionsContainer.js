import React,{useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import QuestionList from './QuestionList';
import MyQuestions from './MyQuestions'
import Leaderboard from './Leaderboard'
import AddQForm from './AddQForm';


function QuestionsContainer({name}) {
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const addPoints = (points) => {
    setPoints(points)
  }

  return (
      <>
        <Routes>
          <Route path='add' element={<AddQForm onAddQ={addQuestion} />} />
          <Route path='show' element={<QuestionList points={points} onScore={addPoints} questions={questions} setQuestions={setQuestions}/>} />
          <Route path='leaderboard' element={<Leaderboard points={points} userName={name}/>} />
          <Route path='userQuestions' element={<MyQuestions />} />
        </Routes>
      </>
  )
}

export default QuestionsContainer