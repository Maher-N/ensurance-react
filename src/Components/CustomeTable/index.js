import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

import React from "react";

import styles from './styles.module.css'

const tableValues = [
  {
    name: "",

    value: "",
  },
];

const Table = ({ tableValues }) => {
  console.log(tableValues);

  return (
    <>
      <div className={styles.customeTable}>
        <MDBTable hover>
          <MDBTableBody>
            <tr>
              <th>Name</th> <th>Value</th>
            </tr>

            {tableValues.map((element) => (
              <tr key={element.name}>
                <td>{element.name}</td> <td>{element.value}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Table;
