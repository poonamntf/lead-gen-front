import React from "react";
import mainimage from "../assets/mainimage.png";
import Topbarbuttons from "./Topbarbuttons";

const MainContent = () => {
  return (
    <div className="maincontent row mt-5">
      <div className="textbox col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="textboxdiv">
          <p className="firstparagraph">Unleash Your Sales Potential</p>
          <h2>Optimize Your Sales With Our Lead Software </h2>
          <p className="secondparagraph">
            Maximize your conversion rates and sales pipeline efficiency with
            out easy-to-use solution
          </p>
          <Topbarbuttons />
        </div>
      </div>
      <div className="image col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src={mainimage} className="img-responsive w-100" />
      </div>
    </div>
  );
};

export default MainContent;
