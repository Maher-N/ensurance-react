import React, { useState, useEffect } from "react";
import classes from "./style.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import SideImage from "../../Components/SideImage/index";
import ILogo from "../../Components/ILogo/index";
import Title from "../../Components/Title/index";
import ColoredBtn from "../../Components/Colored_button/index";
import Checl_Account from "../../Components/Check_Account/index";
import sendEmailOTP from "./mail";
import { MDBContainer, MDBCol, MDBRow, MDBRadio } from "mdb-react-ui-kit";

const Verification = (props) => {
  const { isLoggedIn, message } = props;

  const [loading, setLoading] = useState(false);
  const [toNext1, showNextForm1] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    mobile_phone: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null && user !== "") {
      const email = user.user.email;
      const mobile_number = user.user.mobile_number;
      setUserData({ ...userData, email: email, mobile_phone: mobile_number });
      //console.log(userData);
      let emailsub = email.split("@");
      let emailsub2 = emailsub[0].substring(0, 3);
      let phoneSub = mobile_number.substring(8, 3);
      const lastTwoDigits = mobile_number % 100;
      const firstThreeDigits = mobile_number.slice(0, 3);
      setEmailText(`use your Email ${emailsub2 + "****" + emailsub[1]}`);
      setPhoneText(`use SMS on ${firstThreeDigits + "****" + lastTwoDigits}`);
      localStorage.removeItem("user");
    }
  }, []);

  const sendOTP = (event) => {
    event.preventDefault();
    showNextForm1(true);
  };
  const handelVerification = (event) => {
    event.preventDefault();
    showNextForm1(false);
  };

  function handleOnChange(e) {
    setSelection(e.target.value);
  }

  function NavigateTo() {
    navigate("/login");
  }

  if (isLoggedIn || message == null) {
    return <Navigate to="/" />;
  }

  return (
    <MDBContainer className={classes.container} fluid>
      <MDBRow className={classes.Row}>
        <MDBCol col="5" md="5" className={classes.Col}>
          <SideImage src="/assets/images/verification_side.jpg" />
        </MDBCol>

        <MDBCol col="7" md="7">
          <ILogo />
          {!toNext1 && (
            <div className={classes.verification_form}>
              <Title
                text="Verification  !"
                className={classes.title_alignment}
                color="#003C71"
              />
              <span className={classes.sub_title}>
                <span className={classes.bold_sub_title}>Hello there! </span>
                Thank you for registering with
                <br />
                us. We're excited to have you on board.
              </span>
              <p className={classes.description}>
                Code has been sent to your email {emailText}
                <br />
                didn’t receive the code yet ?{" "}
                <span className={classes.colord_text}>Resend OTP</span>
              </p>
              <div className={classes.verification_options}>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label={emailText}
                  defaultChecked
                  value={userData.email}
                  onChange={handleOnChange}
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label={phoneText}
                  value={userData.mobile_phone}
                  onChange={handleOnChange}
                />

                <ColoredBtn
                  id="Send OTP"
                  text={"Send OTP"}
                  className={classes.submit}
                  loading={loading}
                  onClick={sendOTP}
                />

                <Checl_Account
                  class_wrapper={classes.sperator_wrapper_}
                  text="Have an account ?"
                  redirect_text="Login"
                  onClick={NavigateTo}
                  Register_text={classes.Login_text}
                  seprator={classes.seprator}
                />
              </div>
            </div>
          )}

          {toNext1 && (
            <div className={classes.verification_form}>
              <Title
                text="Verification  !"
                className={classes.title_alignment}
                color="#003C71"
              />

              <p className={classes.description}>
                Code has been sent to your email ({emailText})<br />
                didn’t receive the code yet ?{" "}
                <span className={classes.colord_text}>Resend OTP</span>{" "}
              </p>
              <div className={classes.verfication_numbers}>
                <p className={classes.verfication_num}></p>
                <p className={classes.verfication_num}></p>
                <p className={classes.verfication_num}></p>
                <p className={classes.verfication_num}></p>
                <p className={classes.verfication_num}></p>
              </div>
              <div className={classes.verification_options}>
                <ColoredBtn
                  id="Verfication"
                  text={"Login"}
                  className={classes.submit}
                  loading={loading}
                  onClick={handelVerification}
                />

                <Checl_Account
                  class_wrapper={classes.sperator_wrapper_}
                  text="Have an account ?"
                  redirect_text="Login"
                  onClick={NavigateTo}
                  Register_text={classes.Login_text}
                  seprator={classes.seprator}
                />
              </div>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Verification);
