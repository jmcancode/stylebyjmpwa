import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  Alert,
  Container,
  Image,
} from "react-bootstrap";

import { useAuth } from "../../firebase/context";

import logo from "../../assets/jmlogo.png";
import Cart from "../../assets/shopping-bag.svg";
import LoginIcon from "../../assets/log-in.svg";
import LogoutIcon from "../../assets/log-out.svg";
import "../../App.css";
import { useHistory, Link } from "react-router-dom";

const TopNavBar = () => {
  const history = useHistory();
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

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
            <NavDropdown title="Accessories" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/accessories"
                href="#action/shoecare"
              >
                Leather Care
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/accessories"
                href="#action/laces"
              >
                Laces
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories" href="#action/3.4">
                Shoe Inserts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories" href="#action/3.5">
                Cream & Polish
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/byrequest" href="#byrequest">
              By Request
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" eventKey={2} href="#aboutus">
              Heritage
            </Nav.Link>
            <Nav.Link as={Link} to="/collabs" href="#collaborations">
              Collaborations
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Image src={Cart} alt="shopping-cart" />
            </Nav.Link>
            {/* {!currentUser && (
              <Nav.Link as={Link} to="/login" className="text-muted  mr-3">
                <Image
                  alt="login icon"
                  src={LoginIcon}
                  className="icons"
                />
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to="/"
                className="text-muted  mr-3"
                onClick={handleLogout}
              >
                <Image src={LogoutIcon} alt="logout-icon" />
              </Nav.Link>
            )} */}
          </Nav>
          {error && <Alert variant="danger">{error}</Alert>}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default TopNavBar;
