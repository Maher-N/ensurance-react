import React from 'react'
import { MDBBadge } from 'mdb-react-ui-kit';


const Compare = () => {
  return (
    <a className='mx-3' href='#!'>
        <img src="/retweet.svg"/>
        <MDBBadge color='danger' notification pill>
          99
        </MDBBadge>
      </a>
  )
}

export default Compare