import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import Welcome from './QuestionsContainer'
import QuestionList from './QuestionList'
import AddQForm from './AddQForm'
import Leaderboard from './Leaderboard'


function NavBar() {

    return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/questions">Questions</NavLink>
          </li>
          <li>
            <NavLink to="/addQForm">Add Question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar