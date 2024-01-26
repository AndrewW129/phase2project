import React,{useState,useEffect} from 'react'

function MyQuestions() {
    const [userQuestions, setUserQuestions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/userQuestions')
        .then(response => response.json())
        .then(setUserQuestions) 
    }, [])

    const userQuestionsList = userQuestions.map((question) => { 
        return (
            <ul className='user-question'>
                <li key={question.id}>
                    <p> Difficulty: {question.difficulty}</p>
                    <p>Question: {question.question}</p>
                    <p>Answer: {question.answer}</p>
                </li>
            </ul>
        )
    })
    return (
        <div>
            {userQuestionsList}
        </div>
    )
}



export default MyQuestions