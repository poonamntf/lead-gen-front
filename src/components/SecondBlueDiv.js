import React from "react";
import logo from "../assets/image3.png";
import image1 from "../assets/Button.png";
import image2 from "../assets/Button1.png";
import image3 from "../assets/Button2.png";

const SecondBlueDiv = () => {
  return (
    <div className="secondbluediv mt-5">
      <div className="insidesecondbluediv">
        <h5 className="pt-5">
          <img src={logo} /> Squarespot.
        </h5>
        <p className="mt-3">
          We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud equip ex ea commodo.
        </p>
      </div>
      <div className="mt-5 bottomdiv d-flex justify-content-between">
        <div className="d-flex innerdiv">
          <img className="img-responsive" src={image2} />
          <div className="secondinnerdiv">
            <span>Landline</span>
            <br />
            <span>310-437-2766</span>
          </div>
        </div>
        <div className="d-flex innerdiv">
          <img className="img-responsive" src={image1} />
          <div className="secondinnerdiv">
            <span>Mail</span>
            <br />
            <span>unreal@outlook.com</span>
          </div>
        </div>

        <div className="d-flex innerdiv">
          <img className="img-responsive" src={image3} />
          <div className="secondinnerdiv">
            <span>Address</span>
            <br />
            <span>706 Campfire Ave. Meriden, CT 06450</span>
          </div>
        </div>
      </div>

      <div className="footer mt-5 pb-2">
        © 2000-2021, Squarespot All rights reserved
      </div>
    </div>
  );
};

export default SecondBlueDiv;
