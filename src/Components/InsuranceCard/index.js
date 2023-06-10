import React, { useState } from 'react';

import styles from './style.module.css'
import { MDBBadge, MDBRow } from 'mdb-react-ui-kit'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Rating } from 'react-simple-star-rating'


import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';




const InsuranceCard = ({ carName, insuranceDate, status,insurrerId }) => {

  const [basicModal, setBasicModal] = useState(false);
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }

  const toggleShow = () => {
    setRating(0)
    setBasicModal(!basicModal)};




  // 


  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  // 



  return (

          <div className={styles.insuranceCard}>
            <div className={styles.flex}>
              <img src="/dashboard/car.png" alt="car" />
              <div>
                <h5>{insurrerId}</h5>
                <p>{insuranceDate}</p>
              </div>
              <img className="imgWidth50" src={`/companies/${insurrerId}.png`} alt="company logo" />
            </div>
            <div className={styles.CardFooter}>
           
            { status=="pending" && <MDBBadge
                color="warning"
                className="ms-2"
              >{`Pending Approval`}</MDBBadge>}
               { status !="pending" && <MDBBadge
                color="primary"
                className="ms-2"
              >{`Request Approved`}</MDBBadge>
              }

              { status !="pending" && <MDBBadge
                color="success"
                className="ms-2"
              ><b  onClick={toggleShow} style={{cursor:"pointer"}}>{`⭐ Rate your experiance`}</b></MDBBadge>
              }




            </div>


            <div>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Rate Insurer</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
             <div>
              <img className="imgWidth50" src={`/companies/${insurrerId}.png`} alt="company logo" />
             </div>
              
              <div>
              <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        allowFraction={true}        /* Available Props */
      />
              </div>

          
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn  onClick={toggleShow}>Rate</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>

          </div>
  )
}

export default InsuranceCard