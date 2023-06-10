import React from "react";
import classes from "./style.module.css";

const Title = (props) => {
  return (
    <div className={classes.title} color={`${props.color}!important`}>
      {props.text}
    </div>
  );
};

export default Title;
