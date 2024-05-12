import { useEffect } from 'react'
import QuestionItem from './QItem'

function QuestionList({ questions, setQuestions }) {

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions?limit=1')
    .then(response => response.json())
    .then(setQuestions)
}, []);
  
  return (
    <div>
      <QuestionItem questions={questions}/>
    </div>
  )
}

export default QuestionList