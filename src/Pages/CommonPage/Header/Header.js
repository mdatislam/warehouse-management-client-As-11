import React from "react";
import './Header.css'
import logo from '../../../Images/warehouse-logo2.png'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user]=useAuthState(auth)
  const logOut=()=>{
    signOut(auth)
  }
  return (
    <div className="header ">
      <Navbar bg="" expand="lg"  sticky="top" >
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} width='60px' alt="logo" />
           <strong className="text-danger"> DEPOSITO </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
               <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
              {/* <Nav.Link id='Services' as={Link} to='/Home#Services'>Services</Nav.Link> */}
              {
                user?<>
                <Nav.Link as={Link} to='/ManageInventory'className="text-warning" >ManageInventory</Nav.Link>
                <Nav.Link as={Link} to='/AddItem'className="text-warning">AddItem</Nav.Link>
                </>
              :''
              }
              <Nav.Link as={Link} to='/Blog'> Blog</Nav.Link>
              <Nav.Link as={Link} to='/About'> About</Nav.Link>
            </Nav>
            <Form className="d-flex">
           {
             user?
             <Nav.Link as={Link} to='/Login'><Button variant="outline-danger" className="text-white fs-5" onClick={logOut}>LogOut</Button></Nav.Link>
             :
             <Nav.Link as={Link} to='/Login'><Button variant="outline-success" className="text-white fs-5">Log In</Button></Nav.Link>
           }
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
