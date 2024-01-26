import React,{useState} from 'react'

function QuestionItem({questions, onScore, points}) {
    const questionsList = questions.map(question => question.question.text)
    const correctAnswers = questions.map(question => question.correctAnswer)

    console.log(questions)

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
            return (
                onScore(points + 10),
                alert('Correct!')
                )
        } else {
            return (
                onScore(points - 10),
                setCurrentQuestion(randomQuestion()))
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