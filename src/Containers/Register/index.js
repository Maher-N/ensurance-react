import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import SideImage from "../../Components/SideImage/index";
import ILogo from "../../Components/Logo/index";
import Title from "../../Components/Title/index";
import Paragraph from "../../Components/Paragraph/index";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import Checl_Account from "../../Components/Check_Account/index";
import { IoMdArrowRoundBack } from "react-icons/io";
import ColoredBtn from "../../Components/Colored_button/index";
import axios from "axios";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import "./style.css";

const Register = (props) => {

// JSON SERVER USE STATE 

  const [customerId,setcustomerId]=useState()

// END OF STATE



  const { isLoggedIn, message } = props;

  const Nationality = ["Palestinian", "Jordanian", "American"];
  const Ditricts = ["Palestinian", "Jordanian", "American"];
  const Localities = ["Palestinian", "Jordanian", "American"];
  const Quartiers = ["Palestinian", "Jordanian", "American"];
  const Car_make = ["Marcedes", "Polo", "GTI"];
  const Car_Model = ["Marcedes", "Polo", "GTI"];

  const [basicModal, setBasicModal] = useState(false);
  const [toNext, showNextForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageError, setError] = useState("");
  const [config, setConfig] = useState(null);
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form1Value, setform1Value] = useState({
    email: "",
    password: "",
    fullName:"",
    district: Ditricts[0],
    personal_id: "",
    locality: Localities[0],
    mobile_number: "",
    quarter: Quartiers[0],
    landline: "",
    nationality: Nationality[0],
    car_company: Car_make[0],
    car_id: "",
    car_model: Car_Model[0],
    model_year: "",
    years_of_driving: "",
    car_price: "",
    engine_size: "",
    personal_id_img: "",
    personal_driving_img: "",
    vehicle_license_img: "",
    role: "5",
  });

  const toggleShow = () => setBasicModal(!basicModal);

  const onChange = (e) => {
    setform1Value({ ...form1Value, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  function NavigateTo() {
    navigate("/login");
  }

  const ToNextForm = (event) => {
    event.preventDefault();
    const value = toNext ? false : true;
    showNextForm(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //COMMENTED FOR JSON SERVER 
    // const { dispatch, history } = props;
    // if (files.length === 3) {
    //   setError("");
    //   setLoading(true);

    //   dispatch(
    //     register(
    //       form1Value.email,
    //       form1Value.password,
    //       form1Value.personal_id,
    //       form1Value.district,
    //       form1Value.locality,
    //       form1Value.landline,
    //       form1Value.mobile_number,
    //       form1Value.role,
    //       form1Value.years_of_driving,
    //       form1Value.car_model,
    //       form1Value.car_id,
    //       form1Value.car_company,
    //       form1Value.car_price,
    //       form1Value.engine_size
    //     )
    //   )
    //     .then((response) => {
    //       const user = JSON.parse(localStorage.getItem("user"));
    //       //console.log(user);
    //       const token = user.authorisation.accessToken;
    //       setConfig(null);
    //       const config = {
    //         headers: { Authorization: `Bearer ${token}` },
    //       };
    //       setConfig(config);
    //     })
    //     .catch((error) => {
    //       // Handle registration error
          
    //       setLoading(false);
    //       toggleShow();
    //     });
    // } else {
    //   setError("You should upload all requires images");
    // }
    JsonRegestration()

  };
  useEffect(() => {
    if (config !== null && config !== "") {
      createCar();
      storeImages();
    }
  }, [config]);

  function createCar() {
    axios
      .post("http://localhost:8000/api/cars/add", form1Value, config)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        //console.error(error.response.data);
      });
  }

  function storeImages() {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[i]);
    }
    formData.append("personal_id", form1Value.personal_id);

    axios
      .post("http://localhost:8000/api/auth/store", formData, config)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        //console.error(error.response.data);
      });
    navigate("/verification");
  }

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  ////// JSON SERVER APIS 

  const JsonRegestration = ()=>{

    const carInfo ={
      "id": form1Value.car_id,
      "customerId":form1Value.email,
      "carCompany": form1Value.car_company,
      "carModel":form1Value.car_model,
      "productionYear": 2021,
      "vehiclePrice":form1Value.car_price,
      "engine_size":form1Value.engine_size
    }
    const customerIfo = { 
      "id":form1Value.email,
      "email":   form1Value.email,
      "fullName": form1Value.fullName,
      "password":  form1Value.password,
      "personal_id": form1Value.personal_id,
      "district": form1Value.district,
      "locality": form1Value.locality,
      "landline": form1Value.landline,
      "mobile_number":form1Value.mobile_number,
      "role": form1Value.role,
      "years_of_driving": form1Value.years_of_driving,  
      }




    axios.post(`http://localhost:8000/customers`,customerIfo).then((res)=>{
      if(res.data != null || res.data != undefined){
        console.log(res," POST custoemr")
        axios.post(`http://localhost:8000/cars`,carInfo).then((res)=>{
          console.log(res,"POST cars")

          axios.post("http://localhost:8000/login/",{
            "id":   form1Value.email,
            "userId": form1Value.email,
            "password":  form1Value.password,
          }).then((res)=>{
            console.log(res,"POST")
            setcustomerId(customerIfo.id)
            axios.put("http://localhost:8000/currentCustomer",{
              "customerId":customerIfo.id
            })
          })
        })

        navigate("/login",{state:{setcustomerId}});
      }
    })

  } 

  /////// END OF JSON SERVER APIS

  return (
    <MDBContainer className={classes.container} fluid>
      <MDBRow className={classes.Row}>
        <MDBCol col="5" md="5" className={classes.Col}>
          <SideImage src="/assets/images/Health_login.jpg" />
        </MDBCol>

        <MDBCol col="7" md="7">
          <ILogo />

          {!toNext && (
            <form
              id="registerform"
              className={classes.register_form}
              onSubmit={ToNextForm}
            >
              <Title
                text="Welcome !"
                className={classes.title_alignment}
                color="#003C71"
              />
              <Paragraph text="Create new account " />
              <span className={classes.subTittle}>1- Personal Information</span>
              <div className={classes.register_form_wrapper}>
                <MDBRow className={` ${classes.row_g_3}  g-3 `}>
                  <MDBCol md="5">
                    <span>Your Email/Username</span>

                    <MDBInput
                      value={form1Value.email}
                      name="email"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      type="email"
                    />
                  </MDBCol>
                  <MDBCol md="5">
                    <span>Your Full Name</span>

                    <MDBInput
                      value={form1Value.fullName}
                      name="fullName"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol md="5">
                    <span>District</span>
                    <label className="custom-select">
                      <select
                        value={form1Value.district}
                        name="district"
                        onChange={onChange}
                        id="district"
                        required
                      >
                        {Ditricts.map((m) => (
                          <option value={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Personal ID</span>

                    <MDBInput
                      value={form1Value.personal_id}
                      name="personal_id"
                      onChange={onChange}
                      id="personal_id"
                      required
                      type="number"
                    />
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Locality</span>
                    <label className="custom-select">
                      <select
                        value={form1Value.locality}
                        name="locality"
                        onChange={onChange}
                        id="locality"
                        required
                      >
                        {Localities.map((m) => (
                          <option value={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Mobile Number</span>

                    <MDBInput
                      value={form1Value.mobile_number}
                      name="mobile_number"
                      onChange={onChange}
                      id="mobile_number"
                      required
                      type="number"
                    />
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Quarter</span>
                    <label className="custom-select custom-select3">
                      <select
                        value={form1Value.quarter}
                        name="quarter"
                        onChange={onChange}
                        id="quarter"
                        required
                      >
                        {Quartiers.map((m) => (
                          <option value={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Landline</span>

                    <MDBInput
                      value={form1Value.landline}
                      name="landline"
                      onChange={onChange}
                      id="landline"
                      required
                      type="number"
                    />
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Password</span>

                    <MDBInput
                      value={form1Value.password}
                      name="password"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      type="password"
                    />
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Nationality</span>
                    <label className="custom-select custom-select3">
                      <select
                        value={form1Value.nationality}
                        name="nationality"
                        onChange={onChange}
                        id="nationality"
                        required
                      >
                        {Nationality.map((m) => (
                          <option value={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                  </MDBCol>

                  <MDBCol md="5">
                    <span>Years of driving experience</span>

                    <MDBInput
                      value={form1Value.years_of_driving}
                      name="years_of_driving"
                      onChange={onChange}
                      id="years_of_driving"
                      required
                      type="number"
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <ColoredBtn text={"Next"} className={classes.submit} />
                  </MDBCol>

                  <Checl_Account
                    class_wrapper={classes.sperator_wrapper}
                    text="Already have an account?"
                    redirect_text="signin"
                    onClick={NavigateTo}
                    Register_text={classes.Register_text}
                  />
                </MDBRow>
              </div>
            </form>
          )}
          {toNext && (
            <div className={classes.register_form}>
              <Title
                text="Welcome !"
                className={classes.title_alignment}
                color="#003C71"
              />
              <span className={classes.back} onClick={ToNextForm}>
                {" "}
                Back
              </span>

              <Paragraph text="Create new account " />
              <span className={classes.subTittle}>
                2- Car insurance Information
              </span>
              <div className={classes.register_form_wrapper}>
                <MDBRow tag="form" className="g-3" onSubmit={handleRegister}>
                  <div className={classes.row_next_form}>
                    <MDBCol md="10">
                      <span>Car make</span>
                      <label className="custom-select custom-select3">
                        <select
                          value={form1Value.car_company}
                          name="car_company"
                          onChange={onChange}
                          id="car_company"
                          required
                        >
                          {Car_make.map((m) => (
                            <option value={m}>{m}</option>
                          ))}
                        </select>
                      </label>
                    </MDBCol>
                    <MDBCol md="10">
                      <span>Car model</span>
                      <label className="custom-select custom-select3">
                        <select
                          value={form1Value.car_model}
                          name="car_model"
                          onChange={onChange}
                          id="car_model"
                          required
                        >
                          {Car_make.map((m) => (
                            <option value={m}>{m}</option>
                          ))}
                        </select>
                      </label>
                    </MDBCol>
                    <MDBCol md="10">
                      <span>Model year</span>

                      <MDBInput
                        value={form1Value.model_year}
                        name="model_year"
                        onChange={onChange}
                        id="validationCustom01"
                        required
                        type="number"
                      />
                    </MDBCol>
                    <MDBCol md="10">
                      <span>Car ID</span>

                      <MDBInput
                        value={form1Value.car_id}
                        name="car_id"
                        onChange={onChange}
                        id="car_id"
                        required
                        type="number"
                      />
                    </MDBCol>
                    <MDBCol md="10">
                      <span>Engin Size</span>

                      <MDBInput
                        value={form1Value.engine_size}
                        name="engine_size"
                        onChange={onChange}
                        id="engine_size"
                        required
                        type="number"
                      />
                    </MDBCol>
                  </div>

                  <div className={classes.right_row_next_form}>
                    <div className={classes.requirment}>
                      <span className={classes.subTittle}>
                        Required attachments Files
                      </span>
                      <div className={classes.requirment_text}>
                        <span>1. Personal ID</span>
                        <span>2. Personal Driving license</span>
                        <span>3. Vehicle license</span>

                        <MDBBtn
                          type="button"
                          className={classes.choose}
                          block
                          onClick={() => fileInputRef.current.click()}
                        >
                          <span>choose files</span>
                        </MDBBtn>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          multiple
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div className={classes.fetched_doc}>
                      {Array.from(files).map((file) => (
                        <span value={file.name}>{file.name}</span>
                      ))}
                    </div>
                    <MDBCol md="10">
                      <span>Value of Car</span>

                      <MDBInput
                        value={form1Value.car_price}
                        name="car_price"
                        onChange={onChange}
                        id="car_price"
                        required
                        type="number"
                      />
                    </MDBCol>
                  </div>

                  <MDBCol size="12">
                    <ColoredBtn
                      text={"Submit form"}
                      className={` ${classes.submit} ${classes.submit_form}`}
                      loading={loading}
                    />

                    {message && ( toggleShow &&
                      <MDBModal
                        show={basicModal}
                        setShow={setBasicModal}
                        tabIndex="-1"
                      >
                        <MDBModalDialog>
                          <MDBModalContent>
                            <MDBModalHeader>
                              <MDBModalTitle>Validation Errors</MDBModalTitle>
                              <MDBBtn
                                className="btn-close"
                                color="none"
                              ></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                              {Object.keys(message).map((key) => (
                                <>
                                  {message[key].length > 0 && (
                                    <>
                                      {message[key].map((error, index) => (
                                        <div
                                          className={` ${classes.error_handler} form-group  `}
                                        >
                                          <div
                                            className="alert alert-danger"
                                            role="alert"
                                          >
                                            {error}
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  )}
                                </>
                              ))}
                            </MDBModalBody>

                            <MDBModalFooter>
                              <MDBBtn color="secondary" >
                                Close
                              </MDBBtn>
                            </MDBModalFooter>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                    )}
                    {imageError && (
                      <div className={` ${classes.error_handler} form-group  `}>
                        <div className="alert alert-danger" role="alert">
                          {imageError}
                        </div>
                      </div>
                    )}
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          )}
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

export default connect(mapStateToProps)(Register);
