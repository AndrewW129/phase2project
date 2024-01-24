import React, {useState} from 'react'
import AddQForm from './AddQForm';
import QuestionList from './QuestionList';
import Leaderboard from './Leaderboard'

function Welcome({onNameChange}) {

  const handleNameChange = (e) => {
    onNameChange(e.target.value)
  }
  
  return (
    <div>
      <div>Welcome
        <h1>Welcome to Random Riddler</h1>
        <p>Don't get Riddled</p>
        <input onChange={handleNameChange} type="text" placeholder="Enter a name..." />
        <button type="submit">Proceed</button>
      </div>
      <div> Navigation
        <AddQForm />
        <QuestionList />
        <Leaderboard />
      </div>
    </div>
  )
}

export default Welcome