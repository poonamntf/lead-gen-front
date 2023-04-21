import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../../assets/loginimage.png";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(userData, navigate));
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="d-flex flex-wrap  vh-100 logindiv justify-content-center">
      <div className="loginleftdiv  justify-content-start col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center flex-column">
        <div className="loginlogo  mt-4">
          <Link to="/">
            <img src={logo} className="img-responsive" alt="logo" />
          </Link>
        </div>
        <div className="d-flex flex-column columndiv justify-content-start align-items-center">
          <div className="loginheadings">
            <h3>
              Welcome Back! <br />
              <span>Create a new Account</span>
            </h3>
          </div>
          <div className="loginforminnerdiv mt-3">
            <Form onSubmit={OnSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={userData.name}
                  onChange={OnChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={userData.email}
                  onChange={OnChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={userData.password}
                  onChange={OnChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <div className="loginsignupdiv mt-3">
              Already have an account? <Link to="/login">Log in</Link>
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
