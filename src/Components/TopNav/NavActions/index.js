import { MDBNavbarLink } from 'mdb-react-ui-kit';
import IButton from '../../IButton'
import Avatar from './Avatar';
import Compare from './Compare';
import styles from './style.module.css'


import React from 'react'

const NavActions = () => {
  return (
    <div className={styles.flex} mt={2}>
        <IButton text="New Insurance" />
        {/* <MDBNavbarLink href='/AdminPendingRequest'   nav-link>Admin Panel</MDBNavbarLink> */}
        <Avatar />
        <Compare />
    </div>
  )
}

export default NavActions