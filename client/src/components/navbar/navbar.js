import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaShoppingBag } from "react-icons/fa";
import logo from "../../assets/jmlogo.png";
import { auth } from "../../firebase/firebase.utils";
import { CartContext } from "../../providers/cart/cart.provider";
import CurrentUserContext from "../../context/currentUser/current-user.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "../../App.css";

const TopNavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <NavbarBrand as={Link} to="/">
          <img width={100} height={100} alt="style by jm logo" src={logo} />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mx-auto"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            <Nav.Link as={Link} to="/mens" href="#mens">
              Men
            </Nav.Link>
            <Nav.Link as={Link} to="/bags" href="#womens">
              Women
            </Nav.Link>
            <Nav.Link as={Link} to="/collabs" href="#collaborations">
              Collaborations
            </Nav.Link>
            <Nav.Link as={Link} to="/accessories" href="#accesories">
              Accessories
            </Nav.Link>

            <Nav.Link as={Link} to="/byrequest" href="#byrequest">
              By Request
            </Nav.Link>
            <NavDropdown title="Heritage" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/madeinspain" href="#action/3.3">
                Made in Spain
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/designedinsa" href="#action/3.4">
                Designed in San Antonio
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/jmsjouranl" href="#jmsjouranl">
              Journal
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {currentUser ? (
              <div
                className="pt-2"
                style={{
                  textDecoration: "none",
                  color: "#777",
                  paddingTop: "5",
                }}
                onClick={() => auth.signOut()}
              >
                Sign-out
              </div>
            ) : (
              <Link className="pt-2" style={{ color: "#1f1f1f" }} to="/signin">
                Sign-in
              </Link>
            )}
            {/* <Nav.Link as={Link} to="/checkout">
              
            </Nav.Link> */}
            <CartIcon />
            {hidden ? null : <CartDropdown />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default TopNavBar;
