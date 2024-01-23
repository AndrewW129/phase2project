import React from 'react'
import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import AddQForm from './AddQForm'

function Header() {

  const handleClick = (e) => e.target.textContent === 'Light Mode'? e.target.textContent = 'Dark Mode' : e.target.textContent = 'Light Mode'

  return (

    <div>Header
      <img src="" alt="Logo" />
      <p>USER'S NAME</p>
      <button onClick={handleClick}name="toggle">Light Mode</button>
      <QuestionList />
      <Leaderboard />
      <AddQForm />
    </div>
  )
}

export default Header