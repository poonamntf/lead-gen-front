import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../../assets/loginimage.png";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogin } from "../../redux/actions/adminAction";

const Login = () => {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const OnChangeHandler = (e) => {
    setLoginCred({ ...loginCred, [e.target.name]: e.target.value });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(adminLogin(loginCred));
    console.log("loginCred", loginCred);
  };

  return (
    <div className="d-flex flex-wrap  vh-100 logindiv justify-content-center">
      <div className="loginleftdiv  justify-content-start col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center flex-column">
        <div className="loginlogo  mt-4">
          <Link to="/">
            <img src={logo} alt="logo" className="img-responsive" />
          </Link>
        </div>
        <div className="d-flex flex-column columndiv justify-content-start align-items-center">
          <div className="loginheadings">
            <h3>
              Welcome Back, Admin <br />
              <span>Login To Your Account</span>
            </h3>
          </div>
          <div className="loginforminnerdiv mt-3">
            <Form onSubmit={OnSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={loginCred.email}
                  onChange={OnChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginCred.password}
                  onChange={OnChangeHandler}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Link to="#" className="forgotpassword">
                  Forgot Password?
                </Link>
              </div>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
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

export default Login;
