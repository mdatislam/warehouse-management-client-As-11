import React from "react";
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

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="" expand="lg">
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
               <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/Services'>Services</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={Link} to='/Blog'> Blog</Nav.Link>
              <Nav.Link as={Link} to='/About'> About</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
