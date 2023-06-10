import { MDBContainer } from "mdb-react-ui-kit";
import SectionTitle from "./SectionTitle";
import styles from "./style.module.css";

import React from "react";

const DashBoardSection = ({title, children }) => {
  return (
    <MDBContainer className={styles.mt2}>
      <SectionTitle title={title} />
      {children}
    </MDBContainer>
  );
};

export default DashBoardSection;
