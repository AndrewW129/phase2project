import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
    <div className='navBar'>
      <nav>
        <ul>
          <li>
            <NavLink style={{color: 'green'}} to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink style={{color: 'green'}} to="/questions/add">Add Question</NavLink>
          </li>
          <li>
            <NavLink style={{color: 'green'}} to="/questions/show">Show Question</NavLink>
          </li>
          <li>
            <NavLink style={{color: 'green'}} to='/questions/userQuestions'>View Questions</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar