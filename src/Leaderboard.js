import React,{useState} from 'react'

const initialBoardData = {
  id: '',
  name: '',
  score: ''
}

function Leaderboard() {
  const [boardData, setBoardData] = useState(initialBoardData)

  //map over input for name and input for score to put data into the table
  return (
    <div>
      <h2>
        Leaderboard
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <td>User Name</td>
          <td>User Score</td>
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard