import React from "react";
import "./Offer.css";
import exclusiveImage from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <button>check now</button>
      </div>
      <div className="offers-right">
        <img
          src={exclusiveImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Offer;
