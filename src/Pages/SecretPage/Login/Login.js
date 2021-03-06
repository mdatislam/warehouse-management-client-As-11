import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "./../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../CommonPage/Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, googleUser, googleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // console.log('path name',from)

  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleToLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger fs-4"> {error?.message}</p>;
  }

  const handleResetPassword = () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast(" Password Reset Mail send to your Email id");
    } else {
      toast("Please input Email ");
    }
  };
   if (user) {
    navigate(from, { replace: true });
}

  return (
    <div className="form-container  mx-auto mt-3 mb-3 border p-3 container">
      <div className="login-title">
      <h4 className="mb-3 ">Let's Get Started</h4>
      <p>Sign in to continue to Warehouse</p>
      </div>
      <Form onSubmit={handleToLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" className="w-50" type="submit">
          Login
        </Button>
      </Form>
      {error ? errorMessage : ""}
      <p>
        New to Our WareHouse ?{" "}
        <Link className="text-decoration-none fw-bold" to="/Register">
          {" "}
          Please Register !
        </Link>
      </p>
      <p className="mt-3">
        {" "}
        Forgot Password ?{" "}
        <button
          className="btn btn-link text-decoration-none fw-bolder"
          onClick={handleResetPassword}
        >
          {" "}
          Reset Password !
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default Login;
