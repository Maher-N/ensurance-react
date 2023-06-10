import React from "react";
import classes from "./style.module.css";

function Check_Account(props) {
  return (
    <>
      <p className={` ${classes.sperator_wrapper} ${props.class_wrapper}`}>
        <hr className={` ${classes.seprator}  ${props.seprator} `} /> or{" "}
        <hr className={` ${classes.seprator}  ${props.seprator} `} />
      </p>
      <p className={` ${classes.text} ${props.Register_text} `}>
        {props.text}{" "}
        <span className={classes.colord_text} onClick={props.onClick}>
          {props.redirect_text}
        </span>
      </p>
    </>
  );
}

export default Check_Account;
