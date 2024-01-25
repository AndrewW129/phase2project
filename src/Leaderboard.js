import React from 'react'


function Leaderboard({userName, points}) {

  //map over input for name and input for score to put data into the table
  return (
    <div className='scoreboard'>
      <h2>
        Scoreboard
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userName}</td>
            <td>{points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard