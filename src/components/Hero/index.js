import Background from "./sunsetGC.JPG";
import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${Background})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
