import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import SideImage from "../../Components/SideImage/index";
import ILogo from "../../Components/ILogo/index";
import Title from "../../Components/Title/index";
import Paragraph from "../../Components/Paragraph/index";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import ColoredBtn from "../../Components/Colored_button/index";
import Check_Account from "../../Components/Check_Account/index";

import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";

const Login = (props) => {
  const { isLoggedIn, message } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Commented for JSON_SERVER 
    // setLoading(true);
    // const { dispatch, history } = props;

    // dispatch(login(formValue.email, formValue.password))
    //   .then((response) => {
    //     navigate("/dashboard");
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });


    //JSON SERVER LOGIN HANDLER


    JsonLogin()
  };

  function NavigateTo() {
    navigate("/register");
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  // Json Server Handling

  const JsonLogin =()=>{
    const {email}=formValue
    console.log(email)
    axios.get(`http://localhost:8000/login/${email}`).then((res)=>{
      axios.put("http://localhost:8000/currentCustomer",{
        "customerId":email,
        "id":email,
        "companyName":"",
        "dealerName":""
      })
      if(res != null || res != undefined){
        navigate("/dashboard");
      }
    })
  }




  // End of JSONSERVER
  return (
    <MDBContainer className={classes.container} fluid>
      <MDBRow className={classes.Row}>
        <MDBCol col="5" md="5" className={classes.Col}>
          <SideImage src="/assets/images/Health_login.jpg" />
        </MDBCol>

        <MDBCol col="7" md="7">
          <ILogo />
          <form className={classes.login_form} onSubmit={handleLogin}>
            <Title
              text="Welcome !"
              className={classes.title_alignment}
              color="#003C71"
            />
            <Paragraph text="Login to your acount" />
            <span className={classes.email_text}>Your Email/Username</span>
            <MDBInput
              className={`mb-4 ${classes.email_input}`}
              type="email"
              id="LoginEmail"
              value={formValue.email}
              name="email"
              onChange={onChange}
              required
            />
            <span>Password</span>
            <MDBInput
              className="mb-4"
              type="password"
              id="LoginPassword"
              value={formValue.password}
              name="password"
              onChange={onChange}
              required
            />

            <ColoredBtn
              text={"Login"}
              className={classes.submit}
              loading={loading}
            />
            {message && (
              <div className={` ${classes.error_message} form-group  `}>
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>

          <Check_Account
            class_wrapper={classes.sperator_wrapper_}
            text="Don’t have an account ?"
            redirect_text="signup"
            onClick={NavigateTo}
            Register_text={classes.Register_text}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
