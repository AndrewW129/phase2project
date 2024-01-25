import React,{useState} from 'react'

function QuestionItem({questions}) {
    const questionsList = questions.map(question => question.question.text)
    const correctAnswers = questions.map(question => question.correctAnswer)


    const randomQuestion = () => {
        const randomNum = Math.floor(Math.random() * questionsList.length)
        const randomQuestion = questionsList[randomNum]
        return randomQuestion
    }
    
    const [currentQuestion, setCurrentQuestion] = useState('To Load a question click New Question!')


    const [userAnswer, setUserAnswer] = useState('')

    const handleChange = (e) => {
        setUserAnswer(e.target.value)
    }

    const handleClick = () => {
        setCurrentQuestion(randomQuestion())
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        correctAnswers.map(answer => {if (userAnswer === answer) {
            return alert('Correct!')
        } else {
            return setCurrentQuestion(randomQuestion())
        }})
    }

    

  return (
    <div>
        <h1>{currentQuestion}</h1>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} type="text" value={userAnswer} placeholder='Your Answer is...'/>
            <button type='submit'>Submit Answer</button>
        </form>
        <button onClick={handleClick}>New Question</button>
    </div>
  )
}

export default QuestionItem