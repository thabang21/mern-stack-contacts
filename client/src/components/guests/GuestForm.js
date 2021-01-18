import React, { useContext, useState, useEffect } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const GuestForm = () => {
  const context = useContext(GuestContext)
  const { addGuest, editGuest, clearEdit, update_Guest } = context

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest)
    } else {
      setGuest({
        name: '',
        phone: '',
        diet: 'family'
      })
    }
  }, [editGuest, context])

  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    diet: 'family'
  })
  const { name, phone, diet } = guest
  const onchange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    if (editGuest === null) {
      addGuest(guest);

    } else {
      update_Guest(guest)
      clearEdit()
    }
    setGuest({
      name: '',
      phone: '',
      diet: 'family',
    })
  }
  return (

    <div className="invite-section">
      <h1>{editGuest !== null ? 'Edit contact' : 'Create Contact'}</h1>
      <form onSubmit={onsubmit} >
        <input type="text" placeholder="Name" name="name" value={name} onChange={onchange} required />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onchange} required />
        <p className="options-label">
          Contact Type</p>
        <div className="options">
          <label class="container">family
          <input type="radio" name="diet" value="family" onChange={onchange} checked={diet === "family"} />
            <span class="checkmark"></span>
          </label>
          <label class="container">Friends
          <input type="radio" name="diet" value="Friends" onChange={onchange} checked={diet === "Friends"} />
            <span class="checkmark"></span>
          </label>
          <label class="container">Work
          <input type="radio" name="diet" value="Work" onChange={onchange} checked={diet === "Work"} />
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editGuest !== null ? 'Update Contact' : 'Add Contact'} className="btn" />
        {editGuest !== null ? < input onClick={clearEdit} type="button" className="btn clear" value="Cancel" /> : null}
      </form>

    </div>
  )
}

export default GuestForm



