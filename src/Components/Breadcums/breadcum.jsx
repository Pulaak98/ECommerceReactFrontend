import React from "react";
import "./Breadcum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";

const Breadcum = (props) => {
  const { product } = props;

  return (
    <div className="breadcum">
      Home{" "}
      <img
        src={arrowIcon}
        alt=""
      />{" "}
      Shop{" "}
      <img
        src={arrowIcon}
        alt=""
      />{" "}
      {product.category}{" "}
      <img
        src={arrowIcon}
        alt=""
      />
      {product.name}
    </div>
  );
};

export default Breadcum;
