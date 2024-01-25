import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink to="/QuestionList" >Question List</NavLink>
        <NavLink to="/Leaderboard" >Leaderboard</NavLink>
        <NavLink to="/AddQForm" >Add Question</NavLink>
    </nav>
  )
}

export default NavBar