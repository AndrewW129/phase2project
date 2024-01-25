import React,{useState} from 'react'
import AddQForm from './AddQForm';
import QuestionList from './QuestionList';
import Leaderboard from './Leaderboard'


function Welcome({name, onNameChange}) {
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)

  const handleNameChange = (e) => {
    onNameChange(e.target.value)
  }
  
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const addPoints = (points) => {
    setPoints(points)
  }

  return (
    <div>
      <div>
        <h1>Welcome to Random Riddler</h1>
        <p>Don't get Riddled</p>
        <input onChange={handleNameChange} type="text" placeholder="Enter a name..." />
        <button type="click">Proceed</button>
      </div>
      <div> Navigation
        <AddQForm onAddQ={addQuestion} />
        <QuestionList points={points} onScore={addPoints} questions={questions} setQuestions={setQuestions}/>
        <Leaderboard points={points} userName={name}/>
      </div>
    </div>
  )
}

export default Welcome