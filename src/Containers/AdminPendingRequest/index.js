import React, { useState, useEffect } from "react";
import TopNav from "../../Components/TopNav";
import classes from "./style.module.css";
import SidebarAdmin from "../../Components/SidebarAdmin";
import Nave from "./Header";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPendingRequest = () => {
  const [users, setUsers] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    personalDetails: [
      {
        name: "-",
        value: "-",
      },
    ],

    carInformation: [
      {
        name: "-",
        value: "-",
      },
    ],
    paymentType: "-",
    insurancePlan: "-",
  });
  const [carInfo, setCarInfo] = useState([]);
  const [attachmentsFiles, setAttachmentsFiles] = useState([]);

  const [selectedItem, setSelectedItem] = useState(0);

  const [requestStatus, setRequestStatus] = useState("");
  const [comment, setComment] = useState("");
  const [carIstimationPrice, setcarIstimationPrice] = useState("");

  const [adminInfo, setadminInfo] = useState({
    dealerName: "",
    companyName: "",
    customerList: [
      {
        carId: "",
        customerId: "",
        insurrerId: "",
        dealerId: "",
        insurancePlan: "",
        PaymentType: "",
        status: "",
        id: "",
      },
    ],
  });
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const carIstimation = (e) => {
    setcarIstimationPrice(e.target.value);
  };
  //   const [dealerName, setdealerName] = useState("none");
  //   const [companyName, setcompanyName] = useState("none");
  //   const [customerList, setcustomerList] = useState([
  //     {
  //       carId: "",
  //       customerId: "",
  //       insurrerId: "",
  //       dealerId: "",
  //       insurancePlan: "",
  //       PaymentType: "",
  //       status: "",
  //       id: "",
  //     },
  //   ]);

  // I'm using those values for prototyping purposes
  useEffect(() => {
    setCarInfo([
      {
        name: "Car company",
        value: "Seat",
      },
      {
        name: "Car Model",
        value: "Ibiza",
      },
      {
        name: "Production year",
        value: "2017",
      },
      {
        name: "Vehicle price",
        value: "60000 nis",
      },
      {
        name: "Car ID",
        value: "98554D",
      },
    ]);
    setAttachmentsFiles([
      "InnerPhoto1.jpg",
      "InnerPhoto1.jpg",
      "InnerPhoto1.jpg",
      "license .jpg",
    ]);
  }, []);

  useEffect(() => {
    getCurrentCustomer();
  }, []);

  useEffect(() => {}, []);

  const getCurrentCustomer = async () => {
    await axios
      .get(`http://localhost:8000/currentCustomer`)
      .then(async (res) => {
        const dealerName = res.data.dealerName;
        const companyName = res.data.companyName;
        const customerList = (
          await axios.get(
            `http://localhost:8000/dealers/${dealerName}/insurances`
          )
        ).data;
        setadminInfo({
          dealerName: dealerName,
          companyName: companyName,
          customerList: customerList,
        });
      });
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    console.log("item " + itemId + " clicked");

    getRequestInfo(adminInfo.customerList[itemId].customerId, itemId);
  };

  const getRequestInfo = async (id, index) => {
    const r1 = (await axios.get(`http://localhost:8000/customers/${id}`)).data;
    console.log(r1, "asdasd");
    const r2 = (await axios.get(`http://localhost:8000/customers/${id}/cars`))
      .data[0];
    console.log(id, "IDDD");
    console.log(adminInfo.customerList, "sasdasd");
    const PaymentType = adminInfo.customerList[index].PaymentType;
    const insurancePlan = adminInfo.customerList[index].insurancePlan;
    console.log(PaymentType, "OAY");
    console.log(insurancePlan, "AIS");

    setPersonalInfo({
      personalDetails: [
        {
          name: "Name",
          value: r1.fullname,
        },
        {
          name: "ID",
          value: r1.personal_id,
        },
        {
          name: "Email",
          value: r1.email,
        },
        {
          name: "PhoneNumber",
          value: r1.mobile_number,
        },
        {
          name: "LandLine",
          value: r1.landline,
        },
        {
          name: "Quarter",
          value: "St 16.",
        },
        {
          name: "Locality",
          value: r1.locality,
        },
        {
          name: "District",
          value: r1.district,
        },
      ],

      carInformation: [
        {
          name: "Car company",
          value: r2.carCompany,
        },
        {
          name: "Car Model",
          value: r2.carModel,
        },
        {
          name: "Production year",
          value: r2.productionYear,
        },
        {
          name: "Vehicle price",
          value: r2.vehiclePrice,
        },
        {
          name: "Car ID",
          value: r2.id,
        },
      ],
      paymentType: PaymentType,
      insurancePlan: insurancePlan,
    });
  };

  const changeStatus = async (itemId, status) => {
    await axios.put(
      `http://localhost:8000/insurances/${adminInfo.customerList[itemId].id}`,
      {
        ...adminInfo.customerList[itemId],
        status: status,
        comment: comment,
        carIstimationPrice: carIstimationPrice,
      }
    );

// test removing from list
    const newRequestsArr = adminInfo.customerList.filter(
        (item) => item.carId !== adminInfo.customerList[itemId].carId
      );
      setadminInfo({ ...adminInfo, customerList: newRequestsArr });
  


    status == "approved"
      ? toast.success("Request Approved ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      : toast.error("Request Rejected ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    // Navigate
  };

  return (
    <>
      {/* <h1>{personalInfo.carInformation}</h1> */}

      <TopNav />
      <div className={classes.root}>
        <Nave />
        <div className={classes.main}>
          {/*  */}
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
          <section className={classes.requests}>
            <h2 className={classes.reqTitle}>Request</h2>
            <ul className={classes.reqList}>
              {adminInfo.customerList.map((item, index) => (
                <li
                  className={
                    selectedItem === index
                      ? classes.rereqSelectedItem
                      : classes.reqItem
                  }
                  key={index}
                  onClick={() => handleItemClick(index)}
                >
                  {item.fullName}
                </li>
              ))}
            </ul>
          </section>
          {/*  */}

          <section className={classes.info}>
            <div className={classes.part}>
              <div className={classes.infoContainer}>
                <div className={classes.infoTitle}>Personal Info</div>
                <MDBTable
                  hover
                  style={{
                    marginLeft: "16px",
                    marginTop: "8px",
                    width: "90%",
                  }}
                >
                  <MDBTableBody>
                    {personalInfo.personalDetails.map((element) => (
                      <tr
                        key={element.name}
                        style={{
                          borderColor: "#F1F1F1",
                          borderWidth: "2px 2px 2px 2px",
                        }}
                      >
                        <td
                          width={"40%"}
                          style={{
                            padding: "4px",
                            color: "#003C71",
                            fontSize: "12px",
                          }}
                        >
                          {element.name}
                        </td>
                        <td
                          style={{
                            padding: "4px",
                            color: "#003C71",
                            fontSize: "12px",
                          }}
                        >
                          {element.value}
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </div>
              <div className={classes.carInfo}>
                <div className={classes.infoTitle}>Car Info</div>
                <MDBTable
                  hover
                  style={{
                    marginLeft: "16px",
                    marginTop: "8px",
                    width: "90%",
                  }}
                >
                  <MDBTableBody>
                    {personalInfo.carInformation.map((element) => (
                      <tr
                        key={element.name}
                        style={{
                          borderColor: "#F1F1F1",
                          borderWidth: "2px 2px 2px 2px",
                        }}
                      >
                        <td
                          width={"40%"}
                          style={{
                            padding: "4px",
                            color: "#003C71",
                            fontSize: "12px",
                          }}
                        >
                          {element.name}
                        </td>
                        <td
                          style={{
                            padding: "4px",
                            color: "#003C71",
                            fontSize: "12px",
                          }}
                        >
                          {element.value}
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>

            <div className={classes.part}>
              <div className={classes.infoContainer}>
                <div className={classes.infoTitle}>Attachments</div>
                <MDBTable
                  hover
                  style={{
                    marginLeft: "16px",
                    marginTop: "8px",
                    width: "90%",
                  }}
                >
                  <MDBTableBody>
                    {attachmentsFiles.map((element) => (
                      <tr
                        key={element.name}
                        style={{
                          borderColor: "#F1F1F1",
                          borderWidth: "2px 2px 2px 2px",
                        }}
                      >
                        <td
                          width={"40%"}
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "4px",
                            color: "#00A0D7",
                            fontSize: "12px",
                          }}
                        >
                          <a>{element}</a>
                          <img src={"/printer.png"} />
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </div>
              <div className={classes.infoContainer}>
                <div className={classes.infoTitle}>Insurance Plan</div>
                <MDBTable
                  hover
                  style={{
                    marginLeft: "16px",
                    marginTop: "8px",
                    width: "90%",
                  }}
                >
                  <MDBTableBody>
                    <tr
                      style={{
                        borderColor: "#F1F1F1",
                        borderWidth: "2px 2px 2px 2px",
                      }}
                    >
                      <td
                        width={"40%"}
                        style={{
                          padding: "4px",
                          color: "#3C5984",
                          fontSize: "12px",
                        }}
                      >
                        {personalInfo.insurancePlan}
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
              <div className={classes.infoContainer}>
                <div className={classes.infoTitle}>Payment Type</div>
                <MDBTable
                  hover
                  style={{
                    marginLeft: "16px",
                    marginTop: "8px",
                    width: "90%",
                  }}
                >
                  <MDBTableBody>
                    <tr
                      style={{
                        borderColor: "#F1F1F1",
                        borderWidth: "2px 2px 2px 2px",
                      }}
                    >
                      <td
                        width={"40%"}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "4px",
                          color: "#E83F6F",
                          fontSize: "12px",
                        }}
                      >
                        {personalInfo.paymentType}
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
            <div className={classes.part}>
              <div className={classes.infoContainer}>
                <div className={classes.infoTitle}>Approval</div>

                <div className={classes.subInfo}>
                  <div className={classes.infoSubTitle}>
                    Car Value estimation
                  </div>
                  <input
                    className={classes.inputBox}
                    onChange={carIstimation}
                  />
                </div>

                <div className={classes.subInfo}>
                  <div className={classes.infoSubTitle}>Comments</div>
                  <textarea
                    onChange={commentHandler}
                    className={classes.inputBox}
                  />
                </div>

                <div className={classes.buttons}>
                  <button
                    title="Approve"
                    onClick={() => changeStatus(selectedItem, "approved")}
                    className={classes.approveButton}
                  >
                    Approve
                  </button>
                  <button
                    title="Reject"
                    onClick={() => changeStatus(selectedItem, "rejected")}
                    className={classes.rejectButton}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminPendingRequest;
