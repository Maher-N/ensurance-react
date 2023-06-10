import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import DashBoardSection from "../../Components/DashboardSection";
import CompanyOffers from "../../Components/DashboardSection/CompanyOffers";
import MyInsurance from "../../Components/DashboardSection/MyInsurance";
import News from "../../Components/DashboardSection/News";
import TopNav from "../../Components/TopNav";
import styles from "./style.module.css";
import { getinsurances } from "../../actions/insurances";

import axios from "axios";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Dashboard = (props) => {
  const [customerId, setcustomerId] = useState("");

  useEffect(() => {
    // Call From JSON SERVER
    getCompaniesData();
    getCustomerId();

    //Commented for JSON SERVER
    // async function fetchData() {
    //   try {
    //     checkExpiration();
    //     getComapnies();
    //     getInsurances(personalId);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchData();
  }, []);

 

  //// JSON PART

  const getCustomerId = async () => {
    await axios.get("http://localhost:8000/currentCustomer").then((res) => {
      console.log(res.data, "customerIDDD");
      setcustomerId(res.data);
    });
  };

  console.log(customerId);

  /////
  const [user, setUser] = useState({});
  const [companies, setCompanies] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const personalId = "";
  const { user: currentUser } = props;
  const [insuranceDashboard, setinsuranceDashboard] = useState();

  const navigate = useNavigate();

  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  ///JSON SERVER FUNC

  const getCompaniesData = async () => {
    await axios.get("http://localhost:8000/insurer").then((res) => {
      console.log(res);
      setCompanies(res.data);
    });
  };

  // END OF JSON

  function checkExpiration() {
    // UserService.getUserBoard().then(
    //   (response) => {
    //     setUser(response.data);
    //     // setPersonalId(response.data.user.personal_id);
    //   },
    //   (error) => {
    //     setUser(
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //     );
    //     if (error.response && error.response.status === 403) {
    //       EventBus.dispatch("logout");
    //     }
    //   }
    // );
    const { dispatch } = props;

    const personalId = currentUser.user.personal_id;
    dispatch(getinsurances(personalId))
      .then((response) => {
        console.log(response, "helllp");
      })
      .catch(() => {});
  }

  const getComapnies = () => {
    UserService.getComapnies().then(
      (response) => {
        //console.log(response.data.companies);

        setCompanies(response.data.companies);
      },
      (error) => {}
    );
  };

  const getInsurances = () => {
    const personalId = currentUser.user.personal_id;

    UserService.getInsurances(personalId).then(
      (response) => {
        // console.log(response.data.cars_insurences);

        setInsurances(response.data.cars_insurences);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     console.log(user);
  //     console.log(user.authorisation.accessToken);
  //     // const config = {
  //     //   Authorization: `Bearer ${user.authorisation.accessToken}`,
  //     //   "Content-Type": "application/x-www-form-urlencoded",
  //     // };
  //     // axios
  //     //   .post("http://localhost:8000/api/auth/refresh", config)
  //     //   .then((response) => {
  //     //     setData(response.data);
  //     //   })
  //     //   .catch((error) => {
  //     //     if (error.response.status === 401) {
  //     //       // Redirect to login page or refresh access token
  //     //     } else {
  //     //       setError(error.message);
  //     //     }
  //     //   });
  //     axios
  //       .post("http://localhost:8000/api/auth/refresh",
  //       null,
  //  {

  //  headers: {

  //  'Content-Type': 'application/json',
  //  Authorization: 'Bearer ' + user.authorisation.accessToken,
  //  },
  //  }
  //        )
  //       .then((response) => {
  //         console.log(response.data);

  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         if (error.response && error.response.status === 403) {
  //           EventBus.dispatch("logout");
  //         }

  //       });
  //   }, []);
  return (
    <>
      <TopNav />
      {console.log(insurances, "user data")}
      <DashBoardSection title={"My Insurance"}>
        <MyInsurance currentCustomerId={customerId}/>
      </DashBoardSection>

      <DashBoardSection title={"insurer"}>
        <CompanyOffers companyCardInfo={companies} />
      </DashBoardSection>

      <DashBoardSection title={"News"}>
        <MDBRow>
          <MDBCard style={{ maxWidth: "540px" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          <MDBCard style={{ maxWidth: "540px", marginLeft: "10px" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBRow>
      </DashBoardSection>
    </>
  );
};

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Dashboard);
