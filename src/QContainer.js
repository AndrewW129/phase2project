import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import QuestionList from './QList'
import MyQuestions from './AddedQ'
import AddQForm from './QForm'


function QuestionsContainer() {
  const [questions, setQuestions] = useState([])

  return (
      <>
        <Routes>
          <Route path='add' element={<AddQForm />} />
          <Route path='show' element={<QuestionList questions={questions} setQuestions={setQuestions}/>} />
          <Route path='userQuestions' element={<MyQuestions />} />
        </Routes>
      </>
  )
}

export default QuestionsContainer