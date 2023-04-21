import React from "react";
import mainimage from "../assets/image4.png";
import Topbarbuttons from "./Topbarbuttons";

const MainContent = () => {
  return (
    <div className="maincontent row pt-5 me-0">
      <div className="textbox col-lg-7 col-md-7 col-sm-12 col-xs-12">
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
      <div className="image col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <img src={mainimage} className="img-responsive w-100" />
      </div>
    </div>
  );
};

export default MainContent;
