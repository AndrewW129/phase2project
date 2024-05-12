import { useState } from 'react'

let initValue = ''

function QuestionItem({ questions }) {
    const [userAnswer, setUserAnswer] = useState(initValue)
    const [showAnswer, setShowAnswer] = useState(false)
    
    const handleChange = (e) => {
        setUserAnswer(e.target.value)
    }
    
    const toggleAnswer = (e) => {
        e.preventDefault()
        setShowAnswer(!showAnswer)
    }
    
    let correctAnswer = questions.map(question => question.correctAnswer)
    
    const question = questions.map(question => {
        return (
          <div key={question.id}>
            <p>{question.difficulty}</p>
            <h1>{question.question.text}</h1>
          </div>
        )
    })

    const handleFormSubmit = (e) => {
        if (userAnswer.toLowerCase() === questions[0].correctAnswer.toLowerCase()) {
            alert('Correct Answer!')
        } else {
            e.preventDefault()
            alert('Wrong Answer!')
            setUserAnswer(initValue)
        }
    }

  return (
    <div className='q-container'>
        <div className='question'>
          {question}
        </div>
        <form onSubmit={handleFormSubmit} className='q-form'>
          <input onChange={handleChange} type="text" value={userAnswer} placeholder='Your Answer is...'/>
          <button type='submit' className='q-button' >Submit Answer</button>
        </form>
        <>
          {showAnswer? 
          (
            <>
              <button onClick={toggleAnswer}>Hide Answer</button>
              <h3>{correctAnswer}</h3>
            </>
          ) : (
            <button onClick={toggleAnswer}>Show Answer</button>
          )}
        </> 
    </div>
  )
}

export default QuestionItem