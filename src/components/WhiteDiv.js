import React from "react";
import image from "../assets/image5.png";
import Topbarbuttons from "./Topbarbuttons";

const WhiteDiv = () => {
  return (
    <div className=" flex-wrap whitediv justify-content-flex-end d-flex">
      <div className="  col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center text-align-center align-items-center">
        <div className="insidewhitediv mt-5">
          <h6>Lead smarter, sell better</h6>
          <h2>Manage Your Leads</h2>
          <p>
            Lörem ipsum trinengen mitapp tass. Tiktig alas rebe ng paligt och
            rektiga. Pölängen intraheten och gig an, autoren. Makrorade agen
            mytire. Alas rebeng paligt och rektiga rektiga.
          </p>
          <Topbarbuttons />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center whitedivleft pt-5">
        <img src={image} />
      </div>
    </div>
  );
};

export default WhiteDiv;
