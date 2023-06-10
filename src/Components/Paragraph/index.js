import React from "react";
import classes from "./style.module.css";

const Paragraph = (props) => {
  return <div className={classes.text}>{props.text}</div>;
};

export default Paragraph;
