import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container  mx-auto mt-5 border p-3 container">
      <h4 className="mb-3 text-warning"> Please Login</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary"  className="w-50" type="submit">
          Login
        </Button>
      </Form>
      <p>New to Our WareHouse ? <Link  className="text-decoration-none fw-bold" to='/Register'> Please Register !</Link></p>
      <p> Forgot Password ? <button className="btn btn-link text-decoration-none fw-bolder"> Reset Password !</button> </p>
    </div>
  );
};

export default Login;
