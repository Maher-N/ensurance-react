import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import classes from "./style.module.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className={classes.hero}>
      <div className={classes.left_icon_header}></div>
      <div className={classes.right_icon_header}></div>
      <div className={classes.center_icon_header}></div>
      <div className={classes.left_centr_icon_header}></div>
      <div className={classes.bottom_icon_header}></div>

      <div className={classes.text}>
        <div className={classes.title}>
          Lorem ipsum dolor sit
          <br /> amet, consectetur
        </div>
        <div className={classes.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          lobortis elit.
          <br />
          Pellentesque lobortis, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
          <br />
          Duis ut lobortis elit. Pellentesque lobortis, erat eu tristique
          mattis,
          <br />
          dui ex porta dui, at tempus orci urna quis magna.
        </div>
        <div className={classes.buttons}>
          <MDBBtn
            className={classes.subscribe}
            onClick={() => 
            {  console.log("Navigate ")
              navigate("/register")}}
          >
            Subscribe
          </MDBBtn>
          <MDBBtn className={classes.login} onClick={() => navigate("/login")}>
            <span>Login</span>
          </MDBBtn>
        </div>
      </div>
      <div className={classes.person_header}></div>
    </div>
  );
}

export default Hero;
