import React, { useContext } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const CountGuest = () => {
  const { guests } = useContext(GuestContext)
  // count by diet
  const countByDiet = (diet) => {
    return {
      total: guests.filter(guest => guest.diet === diet).length
    };
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>contact type </th>
            <th> Saved</th>
          </tr>
          <tr>
            <th>family</th>
            <td>{countByDiet('family').total}</td>
          </tr>
          <tr>
            <th>Friends</th>
            <td>{countByDiet('Friends').total}</td>
          </tr>
          <tr>
            <th>Work</th>
            <td>{countByDiet('Work').total}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{guests.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountGuest
