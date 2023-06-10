import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import Hero from '../../Components/Hero/index'
import HomeCards from '../../Components/HomeCards/index'
import ContactUs from '../../Components/ContactUs/index'
import './style.css'

const Home = () => {
  return (
    <div className='home'>
      <MDBContainer fluid>
          <Hero />
          <HomeCards />
          <ContactUs />
      </MDBContainer>
    </div>

  )
}

export default Home
