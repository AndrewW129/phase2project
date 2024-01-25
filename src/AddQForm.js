import React,{useState} from 'react'

const initialFormData= {
  question: '',
  answer: ''
}
function AddQForm({onAddQ}) {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  //   fetch('localhost:4000/userQuestions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //  .then(res => res.json())
  //  .then(onAddQ)
  e.target.reset()
  console.log(e)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='question'type="text" placeholder="Enter question" />
            <input onChange={handleChange} name='answer' type="text" placeholder="Enter answer" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddQForm