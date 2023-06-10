import { MDBBtn, MDBCol, MDBInput, MDBRadio, MDBRow } from "mdb-react-ui-kit";

import React, { useState } from "react";

import IButton from "../../IButton";

const ConfirmPayment = () => {
  const [payment, setPayment] = useState({
    name: "",

    cardNumber: "",

    expDate: "",

    cvv: "",
  });

  const x = (e) => {
    e.preventDefault();

    console.log(payment);
  };

  return (
    <>
      <form>
        <h6>Confirm Payment</h6>

        <MDBInput
          className="mb-4"
          type="text"
          id="nameOnCard"
          name="name"
          label="Name On Card"
          value={payment.name}
          onChange={(e) => {
            setPayment({ ...payment, name: e.target.value });

            console.log(payment);
          }}
        />

        <MDBInput
          className="mb-4"
          type="text"
          id="cardNumber"
          label="Card Number"
          value={payment.cardNumber}
          onChange={(e) => {
            setPayment({ ...payment, cardNumber: e.target.value });

            console.log(payment);
          }}
        />

        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              type="date"
              id="expDate"
              label="Exp Date"
              value={payment.expDate}
              onChange={(e) => {
                setPayment({ ...payment, expDate: e.target.value });

                console.log(payment);
              }}
            />
          </MDBCol>

          <MDBCol>
            <MDBInput
              id="cvv"
              label="CVV"
              value={payment.cvv}
              onChange={(e) => {
                setPayment({ ...payment, cvv: e.target.value });

                console.log(payment);
              }}
            />
          </MDBCol>
        </MDBRow>

        <button
          className="Ibutton"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Payment
        </button>
      </form>
    </>
  );
};

export default ConfirmPayment;
