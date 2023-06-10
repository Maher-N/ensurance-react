import { MDBRadio, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SectionTitle from "../../Components/DashboardSection/SectionTitle";
import TopNav from "../../Components/TopNav";
import Panel from "./Panel";
import PanelTitle from "./Panel/PanelTitle";
import styles from "./style.module.css";

import React from "react";
import { useState, useEffect } from "react";
import IButton from "../../Components/IButton";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import JsonService from "../../services/jsonServer";

const SubmitInsurance = () => {
  // JSON SERVER

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [selectedCarInfo , setselectedCarInfo] = useState({})

  const [allData, setallData] = useState({
    customerId: "",
    fullName:"",
    customerInfo: [],
    customerCars: [],
    dealers:[]
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const r1 = await axios.get("http://localhost:8000/currentCustomer");
        const customerId = r1.data.customerId;

        const r2 = await axios.get(
          `http://localhost:8000/customers/${customerId}`
        );
        const customerInfo = r2.data;
        const customerFullName = r2.data.fullName

        const r3 = await axios.get(
          `http://localhost:8000/customers/${customerId}/cars`
        );
        const customerCars = r3.data;

        const r4 = await axios.get(
          `http://localhost:8000/insurer/${companyName}/dealers`
        );

        const dealers = r4.data;

        const y = {
          customerId: customerId,
          fullName : customerFullName,
          customerInfo: customerInfo,
          customerCars: customerCars,
          dealers : dealers
        };

        setallData(y);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
 
 
  const getCustomerID = async () => {};

  const getCustomerObj = async (id) => {
    console.log(id, "cust");
    await axios.get(`http://localhost:8000/customers/${id}`).then((res) => {
      console.log(res.data, "inside 22222");
      setcustomerObj(res.data);
    });
  };

  const getCustomerCars = async (id) => {
    await axios
      .get(`http://localhost:8000/customers/${id}/cars`)
      .then((res) => {
        console.log(res.data, "cars 22222");
        setcustomerCars(res.data);
      });
  };

 

  //test cars

  const carInfo = {
    id: "a00000",
    customerId: "rami@paltel.ps",
    carCompany: "form1Value.car_company",
    carModel: "form1Value.car_model",
    productionYear: "2021",
    vehiclePrice: "form1Value.car_price",
    engine_size: "form1Value.engine_size",
  };

  const addCar = (e) => {
    axios.post("http://localhost:8000/cars", carInfo).then((res) => {
      console.log(res);
    });
  };

  //end of JSONSERVER

  const location = useLocation();
  const companyName = location.state;

  const [selectCarValue, setselectCarValue] = useState("");
  const [selectDealerValue, setselectDealerValue] = useState("none");

  const handelselectCarValue = async (e) => {
    console.log(e.target.value);
    setselectCarValue(e.target.value);


  await  axios.get(`http://localhost:8000/cars/${e.target.value}`).then((res)=>{
      const result = res.data
      setselectedCarInfo(result)
      console.log(selectedCarInfo,"asdasdas")

    }
    ).catch(error => {
      setselectedCarInfo({})

      return error;
    });
  };

  const getCarInfo = async ()=> {
    
  }

  const handelselectDealerValue = (e) => {
    setselectDealerValue(e.target.value);
  };

  const [paymntType, setpaymentType] = useState("installment");
  const [insuranceType, setinsuranceType] = useState("premium");

  // const SelectComponent = ({ label, options }) => {
  //   const [selectValue, setSelectValue] = useState("Choose your car");

  //   return (

  //   );
  // };

  const submitInsuranceDetials = async () => {
    console.log(selectDealerValue,"AASASDASD")
    await axios
      .post("http://localhost:8000/insurances", {
        carId: selectCarValue,
        customerId: allData.customerId,
        fullName : allData.fullName,
        insurrerId: companyName,
        dealerId:  selectDealerValue,
        insurancePlan: insuranceType,
        PaymentType: paymntType,
        carCompany:selectedCarInfo.carCompany,
        status:"pending",
        price:""
      })
      .then((res) => {
        console.log(res.data, "insurance");
        navigate('/dashboard')
      });
  };



  const Spacer = () => {
    return <p></p>;
  };
  // const {[}myCustomerId, myCustomerInfo, myCustomerCars} = allData;
  // setcustomerCars(myCustomerCars);
  console.log(allData, "alll");
  console.log(allData.dealers);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopNav />
      <Panel className={styles.pdd} title={"Insurance Request"}>
        <div className={styles.wrapping}>
          <img
            src={`/companies/${companyName}.png`}
            alt="com"
            className={styles.logo}
          />
          <div className={styles.flex}>
            <div className={styles.leftSide}>
              <SectionTitle className={styles.mt} title={"Select your Car / Car ID"} />
              {/* <SelectComponent options={["ibiza", "BMW", "Audi"]} /> */}

              <>
                <span>SELECT YOUR CAR</span>
                <label className="custom-select">
                  <select
                    className={styles.select}
                    value={selectCarValue}
                    name="district"
                    id="validationCustom05"
                    required
                    label="Nablus"
                    onChange={handelselectCarValue}
                  >
                    <option value="none"> NONE </option>
                    {allData.customerCars.map((m) => (
                      <option value={m.id}>{m.id}</option>
                    ))}
                  </select>
                </label>
              </>

              <a href="!#">Add New Car</a>
              <Spacer />
              <SectionTitle className={styles.mt} title={"Select Dealer"} />
              {/* <SelectComponent options={["NONE", "Sami", "Ahmad", "Rami"]} /> */}

              <>
                <span>SELECT Dealer ( Optional ) </span>
                <label className="custom-select">
                  <select
                    className={styles.select}
                    value={selectDealerValue}
                    name="district"
                    id="validationCustom05"
                    required
                    label="Nablus"

                    
                    onChange={handelselectDealerValue}
                  >
                    <option value="none"> None </option>
                    {allData.dealers.map((m) => (
                      <option value={m.id}>{m.id}</option>
                    ))}
                  </select>
                </label>
              </>

              <Spacer />

              <SectionTitle
                className={styles.mt}
                title={"Choose Insurance Plan"}
              />
              <div className={styles.inline}>
                <MDBRadio
                  name="insurancetype"
                  id="basic"
                  label="Basic"
                  value={"basic"}
                  onChange={() => {
                    setinsuranceType("basic");
                  }}
                />
                <MDBRadio
                  name="insurancetype"
                  id="premum"
                  label="Premium"
                  defaultChecked
                  value={"premium"}
                  onChange={() => {
                    setinsuranceType("premium");
                  }}
                />
              </div>
              <Spacer />
              <Spacer />

              <SectionTitle
                className={styles.mt}
                title={"Choose Payment Plan"}
              />
              <div className={styles.inline}>
                <MDBRadio
                  name="paymentType"
                  id="One"
                  label="One time"
                  value={"cash"}
                  onChange={() => {
                    setpaymentType("cash");
                  }}
                />

                <MDBRadio
                  name="paymentType"
                  id="Installment"
                  label="Installment"
                  defaultChecked
                  value={"installment"}
                  onChange={() => {
                    setpaymentType("installment");
                  }}
                />
              </div>
            </div>

            <div className={styles.rightSide}>
              <SectionTitle className={styles.mt} title={"Car Info"} />
              <MDBTable className={styles.border}>
                <MDBTableBody>
                  <tr>
                    <th>Car Company</th>
                    <td>{selectedCarInfo.carCompany}</td>
                  </tr>
                  <tr>
                    <th>Car Model</th>
                    <td>{selectedCarInfo.carModel}</td>
                  </tr>
                  <tr>
                    <th>Production year</th>
                    <td>{selectedCarInfo.productionYear}</td>
                  </tr>
                  <tr>
                    <th>Vehicle price</th>
                    <td>{selectedCarInfo.vehiclePrice}</td>
                  </tr>
                  <tr>
                    <th>Car ID</th>
                    <td>{selectedCarInfo.id}</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
        <div className={styles.panelFooter}>
          <button
            className="Ibutton"
            onClick={() => {
              submitInsuranceDetials();
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </Panel>
    </>
  );
};

export default SubmitInsurance;
