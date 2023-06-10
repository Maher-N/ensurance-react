import React from "react";
import classes from "./style.module.css";

const SideImage = (props) => {
  return (
    <img className={`${classes.img_fluid} `} src={props.src} alt="Side image" />
  );
};

export default SideImage;
