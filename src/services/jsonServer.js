import axios from "axios";
import { useState } from "react";

const customerId=""
const customerObj=[]
const customerCars=[]

const getCustomerID = async () => {
  await axios.get("http://localhost:8000/currentCustomer").then((res) => {
    console.log(res.data,"inside service")
    setcustomerId(res.data["customerId"]);
  });
  console.log(customerId)

  return customerId;
};

const getCustomerInfo = async (id) => {
  await axios.get(`http://localhost:8000/customer/${id}`).then((res) => {
    setcustomerObj(res.data);
  });
  return customerObj;
};


const getCustomerCars = async (id) => {
    await axios.get(`http://localhost:8000/customer/${id}/car`).then((res) => {
        setcustomerCars(res.data);
    });
    return customerCars;
  };
  

const JsonService = {
  getCustomerID,
  getCustomerInfo,
  getCustomerCars
};

export default JsonService;
