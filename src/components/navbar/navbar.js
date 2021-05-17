import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/jmlogo.png";

import { FaShoppingBag } from "react-icons/fa";

import "../../App.css";

const TopNavBar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <NavbarBrand as={Link} to="/">
          <img width={100} height={100} alt="style by jm logo" src={logo} />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/mens" href="#mens">
              Men
            </Nav.Link>
            <Nav.Link as={Link} to="/bags" href="#womens">
              Women
            </Nav.Link>
            <Nav.Link as={Link} to="/collabs" href="#collaborations">
              Collaborations
            </Nav.Link>
            <NavDropdown title="Accessories" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/accessories"
                href="#action/laces"
              >
                Bags
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories" href="#action/3.4">
                Belts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories" href="#action/3.5">
                Laces
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/byrequest" href="#byrequest">
              By Request
            </Nav.Link>
            <NavDropdown title="Heritage" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/aboutus">
                Made in Spain
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aboutus" href="#action/3.4">
                Designed in San Antonio, Texas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/checkout"
              className="d-none d-sm-block d-sm-none d-md-block"
            >
              <FaShoppingBag />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/checkout"
              className="d-none d-sm-block d-md-none d-block d-sm-none"
            >
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default TopNavBar;
