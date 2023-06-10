import React from "react";
import { useState, useEffect } from "react";

function ButtonManag(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const btnStyle = {
    color: isClicked ? "red" : "black"
  };
  return (
    <>
    <button
    style={{ ...props.style, ...btnStyle }}
    className={props.className}
      onClick={handleClick}
      id={props.id}
    >
      {props.title}
    </button></>
  );
}
 
export default ButtonManag;
