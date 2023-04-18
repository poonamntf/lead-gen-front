import React from "react";
import image from "../assets/image5.png";
import Topbarbuttons from "./Topbarbuttons";

const WhiteDiv = () => {
  return (
    <div className="w-100 whitediv justify-content-flex-end d-flex">
      <div className=" d-flex justify-content-center align-items-center">
        <div className="insidewhitediv">
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
      <div>
        <img className="img-responsive" src={image} />
      </div>
    </div>
  );
};

export default WhiteDiv;
