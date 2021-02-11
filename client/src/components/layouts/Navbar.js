import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext'
import GuestContext from '../../context/guestContext/guestContext'

const Navbar = () => {
  const { logout, isAuthencated, clearErrors } = useContext(AuthContext)
  const { clearGuests } = useContext(GuestContext)

  const onLogout = () => {
    logout()
    clearGuests()
    clearErrors()
  }
  const authLinks = (
    <Fragment>
      <li><a href='#!' onClick={onLogout}><span className="sm-hide">Logout</span></a></li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <div>
        <h1>CONTACTS BOOK </h1>
      </div>
      <ul>
        {isAuthencated ? authLinks : guestLinks}
      </ul>
    </div>
  )
}

export default Navbar
