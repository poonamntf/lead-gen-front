import React from "react";
import image from "../assets/image1.png";

const Bluediv = () => {
  return (
    <div className="bluediv mt-5">
      <div className="divinsidebluediv">
        <img className="mb-2" src={image} />
        <h5>Welcome To Squarespot</h5>
        <p>
          Welcome to [CRM software name], a cutting-edge customer relationship
          management software designed to help businesses like yours streamline
          their sales, marketing, and customer service operations
        </p>
      </div>
    </div>
  );
};

export default Bluediv;
