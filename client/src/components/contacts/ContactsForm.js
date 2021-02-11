import React, { useContext, useState, useEffect } from 'react'
import GuestContext from '../../context/guestContext/guestContext'

const ContactsForm = () => {
  const context = useContext(GuestContext)
  const { addGuest, editGuest, clearEdit, update_Guest } = context

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest)
    } else {
      setGuest({
        name: '',
        phone: '',
      })
    }
  }, [editGuest, context])

  const [guest, setGuest] = useState({
    name: '',
    phone: '',
  })
  const { name, phone} = guest
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
    })
  }
  return (

    <div className="invite-section">
      <h1>{editGuest !== null ? 'Edit contact' : 'Create Contact'}</h1>
      <form onSubmit={onsubmit} >
        <input type="text" placeholder="Name" name="name" value={name} onChange={onchange} required />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onchange} required />
        <input type="submit" value={editGuest !== null ? 'Update Contact' : 'Add Contact'} className="btn" />
        {editGuest !== null ? < input onClick={clearEdit} type="button" className="btn clear" value="Cancel" /> : null}
      </form>

    </div>
  )
}

export default ContactsForm



