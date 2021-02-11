import React, { useContext, useEffect } from 'react'
import ContactsForm from '../contacts/ContactsForm'
import Contactsdetails from '../contacts/Contactsdetails'
import AuthContext from '../../context/authContext/authContext'

const Home = () => {
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  
  }, [])
  return (
    <div className="app-container">
      <div className="main">
        <ContactsForm />
      </div>
      <Contactsdetails />
    </div>
  )
}
export default Home
