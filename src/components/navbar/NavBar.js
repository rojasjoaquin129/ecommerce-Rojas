import React from "react";
import {
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
  Navbar as BTNavbar,
} from "react-bootstrap";
const NavBar = () => {
  return (
    <BTNavbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <BTNavbar.Brand href="#">MercadoApp</BTNavbar.Brand>
        <BTNavbar.Toggle aria-controls="navbarScroll" />
        <BTNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-warning">Salir</Button>
          </Form>
        </BTNavbar.Collapse>
      </Container>
    </BTNavbar>
  );
};

export default NavBar;
