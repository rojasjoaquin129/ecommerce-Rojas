import React from "react";
import {
  NavDropdown,
  Nav,
  Form,
  Button,
  Container,
  Navbar as BTNavbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NabBar.css";
const NavBar = () => {
  return (
    <BTNavbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <BTNavbar.Brand>MercadoApp</BTNavbar.Brand>
        <BTNavbar.Toggle aria-controls="navbarScroll" />
        <BTNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeClass" : "datos"
                }
              >
                Home
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink
                  to="/category/tennis"
                  className={({ isActive }) =>
                    isActive ? "listActive" : "datosBlack"
                  }
                >
                  Calzado
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/category/phones"
                  className={({ isActive }) =>
                    isActive ? "listActive" : "datosBlack"
                  }
                >
                  Telefonos
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  to="/category/electro"
                  className={({ isActive }) =>
                    isActive ? "listActive" : "datosBlack"
                  }
                >
                  Electronica
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#">
            <CartWidget />
          </Nav.Link>
          <Form className="d-flex">
            <Button variant="outline-warning">Salir</Button>
          </Form>
        </BTNavbar.Collapse>
      </Container>
    </BTNavbar>
  );
};

export default NavBar;
