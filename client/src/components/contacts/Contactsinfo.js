import React, { useContext } from 'react'
import GuestContext from '../../context/guestContext/guestContext'

const Contactsinfo = ({ guest }) => {
  const { removeGuest, edit_Guest, clearEdit} = useContext(GuestContext)
  const { _id, name, phone } = guest

  const handleRemove = () => {
    removeGuest(_id)
    clearEdit()
  }
 
  return (
    <div class="guest-card">
      <div class="card-head">
        <div >

        </div>
        <div>
          <button title="Edit Contact">
            <i class="fas fa-user-edit" onClick={() => edit_Guest(guest)} ></i>
          </button>
          <button onClick={handleRemove} title="Remove Contact">
            <i class="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <h2>{name}</h2>
        <div class="contact">
          <i class="fas fa-phone-alt"></i>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Contactsinfo
