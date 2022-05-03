import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [error1,setError1]= useState('')
  const nameRef= useRef();
  const emailRef= useRef();
  const passwordRef= useRef();
  const repasswordRef= useRef();
  const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleToRegister = event => {
    event.preventDefault();
    const name= nameRef.current.value;
    const email= emailRef.current.value;
    const password= passwordRef.current.value;
    const repassword= repasswordRef.current.value;
   
    if(password !== repassword){
      setError1('password & Confirm Password not Match');
      return
    }
    createUserWithEmailAndPassword(email,password);
    sendEmailVerification()
    toast('Register success');
    navigate('/Login')
    console.log(name,email,password)
    event.target.reset()
  }

  let errorMessage
  if(error || error1){
    errorMessage = <p className="text-danger fs-4">Error: {error?.message} {error1}</p>
  }
  
  return (
    <div className="form-container  mx-auto mt-5 border p-3 container">
      <h4 className="mb-3 text-primary"> Well-Come To Our WareHouse !!</h4>
      <Form onSubmit={handleToRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control ref={nameRef} type="text" name='name'  placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" name="email"  placeholder="Enter email"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control  ref={passwordRef} type="password" name="password"  placeholder="Password"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Control ref={repasswordRef} type="password" name="repassword"  placeholder=" Re-type Password" required />
        </Form.Group>

        <Button variant="primary"  className="w-50" type="submit">
          Register
        </Button>
      </Form>
      {
        error1?errorMessage:''
      }
      <p>
        Already have Account ?
        <Link className="text-decoration-none fw-bold" to="/Login">
          Go Login !
        </Link>
      </p>
      <ToastContainer/>
    </div>
  );
};

export default Register;
