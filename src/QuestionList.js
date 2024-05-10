import { useEffect } from 'react'
import QuestionItem from './QuestionItem'

function QuestionList({ questions, setQuestions }) {

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions?limit=1')
    .then(response => response.json())
    .then(data => setQuestions(data))
}, []);
  
  return (
    <div>
      <QuestionItem questions={questions}/>
    </div>
  )
}

export default QuestionList