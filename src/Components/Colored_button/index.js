import React from "react";
import classes from "./style.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

function Colored_button(props) {
  return (
    <MDBBtn
      type="submit"
      block
      className={` ${classes.submit} ${props.className}`}
      disabled={props.loading}
      onClick={props.onClick}
    >
      {props.loading && (
        <span className="spinner-border spinner-border-sm"></span>
      )}
      <span>{props.text}</span>
    </MDBBtn>
  );
}

export default Colored_button;
