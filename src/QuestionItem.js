import React,{useState} from 'react'

function QuestionItem({questions, onScore, points}) {
    
    const question = questions.map(question => {
        return (
            <div key={question.id}>
                <p>{question.difficulty}</p>
                <h1>{question.question.text}</h1>
                <p>{question.correct_answer}</p>
            </div>
        )
    })
    
    console.log(question)
    const [userAnswer, setUserAnswer] = useState('')

    const handleChange = (e) => {
        setUserAnswer(e.target.value)
    }

    const newQuestion = (e) => {
        console.log('New Question Generated') 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='q-container'>
        <p>Points: {points}</p>
        <div className='question'>
            {question}
        </div>
        <form onSubmit={handleFormSubmit} className='q-form'>
            <input onChange={handleChange} type="text" value={userAnswer} placeholder='Your Answer is...'/>
            <button type='submit' className='q-button' >Submit Answer</button>
        </form>
        <form onSubmit={newQuestion}>
            <button >New Question</button>
        </form>    
    </div>
  )
}

export default QuestionItem