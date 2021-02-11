import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contactsinfo from './Contactsinfo'
import GuestContext from '../../context/guestContext/guestContext'
import AuthContext from '../../context/authContext/authContext'

const Contactsdetails = () => {
  const context = useContext(GuestContext)
  const { loading } = useContext(AuthContext)
  const { guests, guestFilter, searchGuest, getGuests } = context
  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);

  if (guests === null || guests.length === 0) {
    return <h3 className="no-guest">{loading ? 'Loading ...' : 'Please add a contact'}</h3>
  }

  return (
    <div >
      <TransitionGroup className="guests">
        {searchGuest !== null ? searchGuest.map(guest => (
          <CSSTransition key={guest._id} timeout={300}
            classNames='item' >
            <Contactsinfo guest={guest} />
          </CSSTransition>)) :
          guests.filter(guest => !guestFilter || guest.isconfirmed).map(guest => (<CSSTransition key={guest._id} timeout={300}
            classNames='item'>
            <Contactsinfo guest={guest} />
          </CSSTransition>)
          )}
      </TransitionGroup>
    </div>
  )
}
export default Contactsdetails
