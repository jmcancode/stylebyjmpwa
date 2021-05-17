import React from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

export default function TopTopNav() {
  return (
    <>
      <Navbar className="m-0 p-0">
      <Nav className="mr-auto"></Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/checkout">
            <FaShoppingBag /> <span className="mt-1">(0)</span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
