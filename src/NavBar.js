import React from 'react';
import { NavLink } from 'react-router-dom'



function NavBar() {

    return (
    <div className='navBar'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/questions/add">Add Question</NavLink>
          </li>
          <li>
            <NavLink to="/questions/show">Show Question</NavLink>
          </li>
          <li>
            <NavLink to="/questions/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to='/questions/userQuestions'>My Questions</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar