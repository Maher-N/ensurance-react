import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";


const CompanyOffers = ({companyCardInfo}) => {
  // const companyCardInfo = props.companyCardInfo;
  const navigate = useNavigate()

  const navigateToRequest = (e)=>{
    e.preventDefault()
    navigate("/comparison")
  }


  const OfferCard = ({ key ,name, description }) => {
    return (
      <div className={styles.offerCard} key={key}>
        <img className={styles.imgWidth} src={`/companies/${name}.png`} alt="company Logo" />
        <div className={styles.companyInfo}>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className={styles.cardAction}>
          <a href="!#" onClick={(e)=>{
            navigateToRequest(e)
          }}>
            <img src="/buttons/go.png" alt="new insurace" />
          </a>
          {/* <a href="!#">
            <img src="/buttons/addCompare.png" alt="new insurace" />
          </a> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.flex}>
        {companyCardInfo.map((item,index) => {
          return <OfferCard key={index} name={item.insurerName} description={item.description} />
        })}
      </div>
    </>
  );
};

export default CompanyOffers;
