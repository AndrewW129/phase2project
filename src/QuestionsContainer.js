import React,{useState} from 'react'
import AddQForm from './AddQForm';
import QuestionList from './QuestionList';
import Leaderboard from './Leaderboard'
import Welcome from './QuestionsContainer'


function QuestionsContainer({name, onNameChange}) {
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const addPoints = (points) => {
    setPoints(points)
  }

  return (
      <div> Navigation
        <Welcome name={name} onNameChange={onNameChange} />
        <AddQForm onAddQ={addQuestion} />
        <QuestionList points={points} onScore={addPoints} questions={questions} setQuestions={setQuestions}/>
        <Leaderboard points={points} userName={name}/>
      </div>
  )
}

export default QuestionsContainer