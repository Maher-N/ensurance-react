import React from "react";
import "./style.css";
import {
  MDBCard,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Card(props) {
  return (
    <div>
      <MDBCard className="cardHome">
        <MDBCardImage
          className="img"
          src={props.src}
          alt="cards_image"
          position="top"
        />
      </MDBCard>
      <p className="card_text">{props.text}</p>
    </div>
  );
}

export default Card;
