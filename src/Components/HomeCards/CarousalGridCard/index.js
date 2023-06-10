import React from "react";
import classes from "./style.module.css";

function CarousalGridCard(props) {
  return (
    <>
      <div className={classes.cards_Wrapper}>
        <img src={props.img} />
        <div className={classes.text}>
          <h5 className={classes.title}>{props.title}</h5>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default CarousalGridCard;
