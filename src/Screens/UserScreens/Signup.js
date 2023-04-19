import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../../assets/loginimage.png";
import logo from "../../assets/logo.png";
const Signup = () => {
  return (
    <div className="d-flex flex-wrap  vh-100 logindiv justify-content-center">
      <div className="loginleftdiv  justify-content-start col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center flex-column">
        <div className="loginlogo  mt-4">
          <img src={logo} />
        </div>
        <div className="d-flex flex-column columndiv justify-content-start align-items-center">
          <div className="loginheadings">
            <h4>Welcome Back!</h4>
            <h5>Create a new Account</h5>
          </div>
          <div className="loginforminnerdiv mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                login
              </Button>
            </Form>
            <div className="loginsignupdiv mt-3">
              Already have an account? <a href="#">Log in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 loginimage">
        <div className="colordiv ">
          <img className="vh-100 " src={image} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
