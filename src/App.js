import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate, Router } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./Containers/Home/index";
import Login from "./Containers/Login/index";
import Register from "./Containers/Register/index";
import Verification from "./Containers/Verification/index";
import { history } from "./Components/helpers/history";
import { clearMessage } from "./actions/message";
import Dashboard from './Containers/Dashboard';
import SubmitInsurance from './Containers/SubmitInsurance';
import OffersComparison from './Containers/SubmitInsurance/OfferComparison';
import TopNav from "./Components/TopNav";
import Payment from "./Components/Payment";
import AdminPendingRequest from "./Containers/AdminPendingRequest";
import AdminManagement from "./Containers/AdminManagement";
import AdminLogin from "./Containers/adminLogin";


const App = (props) => {
  const [currentUser, setUser] = useState(undefined);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [shٍowModeratorBoard, setShٍowModeratorBoard] = useState(false);

  history.listen((location) => {
    props.dispatch(clearMessage()); // clear message when changing location
  });

  useEffect(() => {
    if (props.user !== null && props.user !== undefined) {
      setUser(props.user.user);
    }
  }, []);

  function logOut() {
    props.dispatch(logOut());
  }

  return (
  
      <Routes history={history}>
        <Route element={<Layout />}>
         <Route exact path="/" element={<Home />} />
         </Route>
         <Route exact path="/payment" element={<Payment />} />
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/register" element={<Register />} />
         <Route exact path="/dashboard" element={<Dashboard />} />
         <Route exact path="/request" element={<SubmitInsurance />}/>
         <Route exact path="/comparison" element={<OffersComparison />}/>
         <Route exact path="/AdminPendingRequest" element={<AdminPendingRequest />}/>
         <Route exact path="/AdminManagement" element={<AdminManagement />}/>
         <Route exact path="/AdminLogin" element={<AdminLogin />} />
     </Routes>
  )

}


function mapStateToProps(state) {
  //console.log(state.auth);

  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
