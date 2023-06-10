import { MDBBadge } from "mdb-react-ui-kit";
import Empty from "./EmptyInsurance";
import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import InsuranceCard from "../../InsuranceCard";
import axios from "axios";

const MyInsurance = ({currentCustomerId}) => {
  const [currentCustomer, setcurrentCustomer] = useState();
  const [data , setdata]=useState([])

  useEffect( () => {
     getCurrentCustomer()
    getCustomerRequests(currentCustomer)
  },[currentCustomer]);

  const getCurrentCustomer = async () => {
    const r1 = await axios.get(`http://localhost:8000/currentCustomer`);
    const da = r1.data.customerId
    setcurrentCustomer(da)

  };

 const getCustomerRequests = ()=>{
  console.log("FOOO")
  axios.get(`http://localhost:8000/customers/${currentCustomer}/insurances`).then((res)=>{
    console.log(res.data,"foooooooo")
    const da = res.data
    setdata(da)
  })
 }



  return (
    <>
      {console.log(data, "DATAA")}

      {data && data.length != 0 ? (
        <div className={styles.scroller}>
          {data.map((item) => {
            return (
              <InsuranceCard
                carName={item.carCompany}
                insurrerId={item.insurrerId}
                insuranceDate={item.insuranceDate}
                status={item.status}
              />
            );
          })}
        </div>
      ) : (
        <Empty />
      )}

      {/* {data.length == 0 || data == [] || data == undefined && <Empty />}
    
      {data && (
        <div className={styles.scroller}>
          {data.map((item) => {
            return  <InsuranceCard
                carName={item.carName}
                insuranceDate={item.insuranceDate}
                status={item.status}
              />
          })}
        </div>
      )} */}
    </>
  );
};

export default MyInsurance;
