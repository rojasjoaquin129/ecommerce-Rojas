import React, { useContext, useState } from "react";
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

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import "./NabBar.css";
import { CartConstext } from "../../context/CartContex";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = () => {
  const [count, setCount] = useState(0);
  const [invisible, setinvisible] = useState(false);
  const { items } = useContext(CartConstext);

  useEffect(() => {
    if (items.length > 0) {
      setinvisible(false);
      setCount(items.length);
    } else {
      setinvisible(true);
      setCount(0);
    }
  }, [items]);

  return (
    <BTNavbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <BTNavbar.Brand>MercadoApp</BTNavbar.Brand>
        <BTNavbar.Toggle aria-controls="navbarScroll" />
        <BTNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", maxWidth: "60%" }}
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
          <Nav.Link>
            <NavLink to="cart">
              <StyledBadge
                badgeContent={count}
                color="secondary"
                invisible={invisible}
              >
                <CartWidget />
              </StyledBadge>
            </NavLink>
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
