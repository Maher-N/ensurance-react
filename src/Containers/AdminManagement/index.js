import React from "react";
import TopNav from "../../Components/TopNav";
import TableInsurence from "../../Components/table/index";
import IButton from "../../Components/IButton";
import NavBarSw from "../../Components/NavBarSw";

import styles from "./style.module.css";
import Panel from "../SubmitInsurance/Panel/index";
import { useState, useEffect } from "react";
import ButtonManag from "../../Components/ButtonManag/index";
import { Route, Routes, Navigate, Router, NavLink } from "react-router-dom";
import { MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import { MDBRow } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "../AdminPendingRequest/style.module.css";
import axios from "axios";

const AdminManagement = () => {
  const [newDealer, setNewDealer] = useState({
    fullName: "",
    dealerUsername: "",
    email: "",
    mobile: "",
    landline: "",
    district: "",
  });
  const [companyDealers, setcompanyDealers] = useState({
    dealerName: "",
    companyName: "",
    companyDealers: [
      {
        id: "",
        insurerId: "",
        dealerName: "",
      },
    ],
  });
  // const [selectedDealer, setselectedDealer] = useState(0);

  useEffect(() => {
    getCurrentData();
  }, []);

  const handleAddingDealer = async () => {


    await axios.post(`http://localhost:8000/dealers`, {
      id: newDealer.dealerUsername,
      insurerId: companyDealers.companyName,
      dealerName: newDealer.dealerUsername,
    });
    await axios.post(`http://localhost:8000/customers`, {
      "id": newDealer.email,
      "fullname": newDealer.fullName,
      "email": newDealer.email,
      "password": "123456",
      "personal_id": "-",
      "district": newDealer.district,
      "locality": "-",
      "landline": newDealer.landline,
      "mobile_number": newDealer.mobile,
      "role": "D",
      "years_of_driving": "-"
    });
    await axios.post(`http://localhost:8000/login`, {
      id:  newDealer.email,
      userId:  newDealer.email,
      password: "123456"
    });


    toast.success("Dealer Added Successfully ", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const getCurrentData = async () => {
    await axios
      .get(`http://localhost:8000/currentCustomer`)
      .then(async (res) => {
        const dealerName = res.data.dealerName;
        const companyName = res.data.companyName;
        console.log(dealerName + " " + companyName);
        const companyDealers = (
          await axios.get(
            `http://localhost:8000/insurances/${companyName}/dealers/`
          )
        ).data;
        console.log(companyDealers);
        setcompanyDealers({
          dealerName: dealerName,
          companyName: companyName,
          companyDealers: companyDealers,
        });
      });
  };
  const deleteDealerHandler = async (index, item) => {
    const newDealersArr = companyDealers.companyDealers.filter(
      (dealer) => dealer.id !== item.id
    );
    setcompanyDealers({ ...companyDealers, companyDealers: newDealersArr });

    await axios.delete(`http://localhost:8000/dealers/${item.id}`);
  };

  const handleFormData = (e)=>{
    const { name, value } = e.target;
    setNewDealer({...newDealer, [name]:value})
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <TopNav />
      {/* <Panel className={styles.pdd} title={"Insurance Request"}> */}
      <section className={styles.main}>
        <div className={styles.navbar}>
          <NavBarSw />
        </div>

        <MDBRow>
          <MDBCol size={1} />
          <MDBCol size={4}>
            <h4>
              🚀 <b>Add new Dealer</b>
            </h4>
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="fullName" value={newDealer.fullName} label="Full Name" />
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="dealerUsername"  value={newDealer.dealerUsername} label="Dealer username" />
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="email" value={newDealer.email} label="Email" type="email" />
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="mobile" value={newDealer.mobile} label="Mobile" type="text" />
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="landline" value={newDealer.landline} label="Landline" type="text" />
            <MDBInput wrapperClass="mb-4" onChange={handleFormData} name="district" value={newDealer.district} label="District" type="text" />
            <button
              style={{
                width: "100%",
                margin: "auto",
              }}
              className="Ibutton"
              onClick={handleAddingDealer}
            >
              {" "}
              Add Dealer{" "}
            </button>
          </MDBCol>
          <MDBCol
            style={{
              borderLeft: "1px solid #cbc9c9",
            }}
            size={6}
          >
            <section className={classes.requests}>
              <h4>
                👨‍💼 <b>Dealers List</b>
              </h4>
              <ul className={classes.reqList}>
                {companyDealers.companyDealers.map((item, index) => (
                  <li key={index}>
                    <div className={styles.flexitem}>
                      {item.id}

                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          deleteDealerHandler(index, item);
                        }}
                      >
                        <MDBIcon fas icon="trash" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </MDBCol>
        </MDBRow>
      </section>

      {/* </Panel> */}
    </>
  );
};

export default AdminManagement;
