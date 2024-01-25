import React,{useState} from 'react'
import AddQForm from './AddQForm';
import QuestionList from './QuestionList';
import Leaderboard from './Leaderboard'

function Welcome({onNameChange}) {
  const [questions, setQuestions] = useState([])

  const handleNameChange = (e) => {
    onNameChange(e.target.value)
  }
  
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }
  return (
    <div>
      <div>Welcome Section
        <h1>Welcome to Random Riddler</h1>
        <p>Don't get Riddled</p>
        <input onChange={handleNameChange} type="text" placeholder="Enter a name..." />
        <button type="submit">Proceed</button>
      </div>
      <div> Navigation
        <AddQForm onAddQ={addQuestion} />
        <QuestionList questions={questions} setQuestions={setQuestions}/>
        <Leaderboard />
      </div>
    </div>
  )
}

export default Welcome