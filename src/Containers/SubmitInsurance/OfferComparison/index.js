import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import TopNav from "../../../Components/TopNav";
import styles from "./offersStyle.module.css";

import React, { useEffect, useState } from "react";
import Panel from "../Panel";
import IButton from "../../../Components/IButton";
import FeatureCheck from "./FeatureCheck";
import ArrowBtn from "../../../Components/ArrowBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OffersComparison = () => {


  useEffect(()=>{
    getData()
  }, []);

  const navigate = useNavigate()


  const [myinsurer,setInsurer]=useState([{
    "id": "",
    "insurerName": "",
    "description": "",
    "img": ""
  }])

  const getData = async () => {
    await axios.get("http://localhost:8000/insurer").then((res) => {
      console.log(res.data,"insurance")
      setInsurer(res.data)
    });
  };

  const goFillRequest= (e,companyName)=>{
    navigate("/request",{ state: companyName })
  }




  return (
    <>
      <TopNav />

      <Panel title={"Insurance Offers"}>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope="col"></th>

              {myinsurer.map((item) => {
                return (
                  <th scope="col">
                    <div className={styles.tableHeader}>
                      <img className={styles.Imgwidth} src={`/companies/${item.insurerName}.png`} />
                      <button className="Ibutton" onClick={
                        (e)=>{
                          goFillRequest(e,item.insurerName)
                        }
                      } >
                        Subscirbe
                      </button>
                    </div>
                  </th>
                );
              })}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr className={styles.separator}>
              <td colSpan={7}>
                <h6 className={styles.leftText}>Pricing</h6>
              </td>
            </tr>
            <tr>
              <th scope="row" className={styles.pinkHeader}>
                Basic
              </th>
              <td>1250 nis</td>
              <td>1250 nis</td>
              <td>1250 nis</td>
              <td>1250 nis</td>
              <td>1250 nis</td>
              <td>1250 nis</td>
            </tr>
            <tr>
              <th scope="row" className={styles.pinkHeader}>
                Premium
              </th>
              <td>2500 nis</td>
              <td>2500 nis</td>
              <td>2500 nis</td>
              <td>2500 nis</td>
              <td>2500 nis</td>
              <td>2500 nis</td>
            </tr>
            <tr className={styles.separator}>
              <td colSpan={7}>
                <h6 className={styles.leftText}>Features</h6>
              </td>
            </tr>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <tr>
                  <th scope="row" className={styles.pinkHeader}>
                    Feature {index + 1}
                  </th>
                  <td>
                    <FeatureCheck status={true} />
                  </td>
                  <td>
                    <FeatureCheck status={true} />
                  </td>
                  <td>
                    <FeatureCheck status={false} />
                  </td>
                  <td>
                    <FeatureCheck status={true} />
                  </td>
                  <td>
                    <FeatureCheck status={false} />
                  </td>
                  <td>
                    <FeatureCheck status={true} />
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </Panel>
    </>
  );
};

export default OffersComparison;
