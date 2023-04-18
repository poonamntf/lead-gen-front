import React from "react";
import Button from "react-bootstrap/Button";

const Topbarbuttons = () => {
  return (
    <div className="d-flex felx-wrap align-items-center">
      <Button className="demobutton">Request a Demo</Button>
      <Button className="loginbutton">Login</Button>
    </div>
  );
};

export default Topbarbuttons;
