import React from 'react'
import AddQForm from './AddQForm';
import QuestionList from './QuestionList';
import Leaderboard from './Leaderboard'

function Welcome() {
  return (
    <div>Welcome
      <div>
        <h1>Welcome to Random Riddler</h1>
        <p>Don't get Riddled</p>
      </div>
      <div>
        <AddQForm />
        <QuestionList />
        <Leaderboard />
      </div>
    </div>
  )
}

export default Welcome