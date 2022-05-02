import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-container  mx-auto mt-5 border p-3 container">
      <h4 className="mb-3 text-primary"> Well-Come To Our WareHouse !!</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder=" Re-type Password" />
        </Form.Group>

        <Button variant="primary"  className="w-50" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have Account ?
        <Link className="text-decoration-none fw-bold" to="/Login">
          Go Login !
        </Link>
      </p>
    </div>
  );
};

export default Register;
