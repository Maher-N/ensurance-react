import React, { useState } from "react";

import Panel from "../../Containers/SubmitInsurance/Panel";


import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

import styles from "./styles.module.css";

import ConfirmPayment from "./ConfirmPayment";

import TopNav from "../TopNav";

import Table from "../CustomeTable";
import InsuranceCard from './../InsuranceCard/index';

const Payment = () => {
  const [paymentOption, setPaymentOption] = useState("reflect");

  // const [showConfirmPayment, setShowConfirmPayment] = useState(false);

  return (
    <>
      <TopNav />

      <br />

      <br />

      <br />

      <Panel title={"Payment"}>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md">
              <InsuranceCard
                carName={"Skoda"}
                insuranceDate={"5/5/2025"}
                status={"avalible"}
              />

              <h6>Payment Option</h6>

              <br />

              <div className={styles.inline}>
                <MDBRadio
                  className="radio-inline"
                  name="paymentType"
                  id="reflect"
                  label="Reflect"
                  value="reflect"
                  onChange={() => setPaymentOption("reflect")}
                />

                <MDBRadio 
                
                  className="radio-inline"
                  name="paymentType"
                  id="cash"
                  label="Cash"
                  value="cash"
                  onChange={() => setPaymentOption("cash")}
                />

                <MDBRadio
                  className="radio-inline"
                  name="paymentType"
                  id="visa"
                  label={
                    <img
                      className={styles.visaLogo}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxHAWoWBrDmeRTK5RKc9d-JfIb9FoPe83gtj-1cti&s"
                      alt="Visa"
                    />
                  }
                  value="visa"
                  onChange={() => setPaymentOption("visa")}
                />
              </div>
            </MDBCol>

            {paymentOption == "visa" ? (
              <MDBCol size="md">
                <ConfirmPayment />
              </MDBCol>
            ) : null}

            {paymentOption == "reflect" ? (
              <MDBCol size="md">
                <img
                  className={styles.paymentOption}
                  src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
                ></img>

                <button
                  className="Ibutton"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Pay via reflect
                </button>
              </MDBCol>
            ) : null}

            {paymentOption == "cash" ? (
              <MDBCol size="md">
                <button
                  className="Ibutton"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Pay via cash
                </button>
              </MDBCol>
            ) : null}
            
          </MDBRow>
        </MDBContainer>
      </Panel>
    </>
  );
};

export default Payment;
