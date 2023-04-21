import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Login from "../Screens/UserScreens/Login";

const Topbarbuttons = () => {
  return (
    <div className="d-flex felx-wrap align-items-center">
      <Button className="demobutton">Request a Demo</Button>
      <Link to="/login">
        <Button className="loginbutton">Login</Button>
      </Link>
    </div>
  );
};

export default Topbarbuttons;
