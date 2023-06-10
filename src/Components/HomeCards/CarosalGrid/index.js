import React from "react";
import Carousel from "react-grid-carousel";
import Card from "../CarousalGridCard/index";
import { Companies } from "../CarousalGridCard/companies";
import { useState, useEffect } from "react";

function CarosalGrid() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
     //console.log(windowSize)
      if (windowSize <= 1300) {
        //console.log("hereee")
       setCols(2) ;
      } else if (windowSize <= 775) {
        //console.log("hereee hereee")

        setCols(1) ;
      }else {
        //console.log("hereee hereee hereee")

        setCols(3) ;
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      setCols(3);
    };
  }, []);

  return (
    <>
      <Carousel cols={cols} rows={1} gap={20} loop>
        {Companies.map((m) => (
          <Carousel.Item>
            <Card img={m.img} title={m.title} paragraph={m.paragraph} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarosalGrid;
