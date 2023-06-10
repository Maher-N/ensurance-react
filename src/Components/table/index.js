import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import styles from "./style.module.css"

export default function TableInsurence(props) {
  const rows = props.data.map((item, index) => (

    <tr key={index} style={{ borderColor: "#DCDCDC" }} >
      <th scope='row' style={{ padding: "17px 0px", paddingLeft: "4px" }}
      >
        <MDBCheckbox onClick={() => console.log(item.service)}></MDBCheckbox>
      </th>
      <td>{item.service}</td>
      <td><input style={{
        paddingRight: " 300px", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.203)"
      }}
        type="text"
        value={item.description}
      /></td>
    </tr>
  ));

  return (
    <>
      <MDBTable bordered borderColor="#DCDCDC" >
        <MDBTableHead>
          <tr>
            <th scope='col' style={{ padding: "17px 0px", paddingLeft: "4px", borderColor: "#DCDCDC" }}>
            </th>
            <th style={{ padding: " 12px 30px", textAlign: "center", borderColor: "#DCDCDC" }}>Service</th>
            <th style={{ padding: "12px 200px", textAlign: "center", borderColor: "#DCDCDC" }} colSpan={2}>Description</th>

          </tr>
        </MDBTableHead>
        <MDBTableBody>

          {rows}
        </MDBTableBody>
      </MDBTable>
      <div className={styles.iButton}>
        <button title="Approve" className={styles.approveButton}>Approve </button>
        <button title="Cancel" className={styles.cancelButton} >Cancel </button>

        {/* <IButton  text={"Save"} />
                 <button style={{marginRight: "31px",
       padding: "5px",
       width: "107px",
       height: "31px",backgroundColor:"#ed3558" , color:"white" , border:"none"}}>Cancel</button> */}
      </div>
    </>
  );
}