import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialFormData= {
  question: '',
  difficulty: '',
  answer: ''
}

function AddQForm() {
  const [formData, setFormData] = useState(initialFormData)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/userQuestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
   .then(res => res.json())
   .then(
    alert('Question Added!'),
    navigate('/questions/userQuestions')
   )
  }

  return (
    <div className='q-form'> 
      <h1>Add a new Question</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='difficulty' type="text" placeholder="Enter difficulty" />
            <input onChange={handleChange} name='question'type="text" placeholder="Enter question" />
            <input onChange={handleChange} name='answer' type="text" placeholder="Enter answer" />
            <br></br>
            <button type='submit'>Add Question</button>
        </form>
    </div>
  )
}

export default AddQForm