import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../../assets/loginimage.png";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="d-flex w-100 logindiv">
      <div className="w-50">
        <div className="loginlogo d-flex justify-content-center">
          <img src={logo} />
        </div>
        <div className="d-flex flex-column h-100 justify-content-center">
          <div className="loginforminnerdiv">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <img className="w-100" src={image} />
      </div>
    </div>
  );
};

export default Login;
