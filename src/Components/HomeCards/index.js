import React from "react";
import classes from "./style.module.css";
import Card from "./Card/index";
import CarIcon from "../../images/carIcon.png";
import BuildingIcon from "../../images/BuildingIconp.png";
import DentisIcon from "../../images/DentisIcon.png";
import MonyIcon from "../../images/MonyIcon.png";
import CarosalGrid from "./CarosalGrid/index";

function HomeCards() {
  return (
    <div className={classes.body}>
      <div className={classes.text}>
        <div className={classes.title}>Car Insurance Features</div>
        <div className={classes.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          <br />
          lobortis elit. Pellentesque lobortis, Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Duis ut lobortis elit.
        </div>
      </div>

      <div className={classes.left_circle_cards}></div>
      <div className={classes.left_rectangle_cards}></div>
      <div className={classes.right_rectangle_cards}></div>

      <div className={classes.Insurences_cards}>
        <Card src={CarIcon} text="End-End Full Cycle" />
        <Card src={BuildingIcon} text="Premium Services" />
        <Card src={DentisIcon} text="Online Paymen" />
        <Card src={BuildingIcon} text="Online Paymen" />
        <Card src={MonyIcon} text="Roznamati(autoremainder)" />
      </div>

      <div className={classes.available_Insurences}>
        <CarosalGrid />
      </div>
    </div>
  );
}

export default HomeCards;
