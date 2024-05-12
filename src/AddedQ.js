import { useState, useEffect } from 'react'

function MyQuestions() {
    const [userQuestions, setUserQuestions] = useState([])
    const [apiQuestions, setApiQuestions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/userQuestions')
        .then(res => res.json())
        .then(setUserQuestions)

        fetch('https://the-trivia-api.com/v2/questions')
        .then(res => res.json())
        .then(setApiQuestions)
    }, [])

    const userQuestionsList = userQuestions.map((question) => { 
        return (
            <ul className='userQuestion'>
                <li key={question.id}>
                    <p>Difficulty: {question.difficulty}</p>
                    <p>Question: {question.question}</p>
                    <p>Answer: {question.answer}</p>
                </li>
            </ul>
        )
    })
    
    const apiQuestionsList = apiQuestions.map((question) => {
        return (
            <ul className='userQuestion'>
                <li key={question.id}>
                    <p>Difficulty: {question.difficulty}</p>
                    <p>Question: {question.question.text}</p>
                    <p>Answer: {question.correctAnswer}</p>
                </li>
            </ul>
        )
    })
    
    return (
        <div>
            {userQuestionsList}
            {apiQuestionsList}
        </div>
    )
}
export default MyQuestions