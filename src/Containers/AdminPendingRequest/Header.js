import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import styles from "./style.module.css"
export default function NavBarSw() {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <MDBNavbar style={{height:"0px"}} expand='lg' light bgColor='light' >
      <MDBContainer className={styles.nav} fluid >
        <MDBNavbarBrand  href='#'></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar     show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink  href='#'>
              Admin Panel
            </MDBNavbarLink>
            <MDBNavbarLink href='/AdminManagement'   nav-link>Dealers Management</MDBNavbarLink>
            <MDBNavbarLink href='/AdminPendingRequest'  active nav-link>Pending Requests</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}