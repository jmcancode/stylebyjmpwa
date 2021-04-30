import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import "./foooter.css";

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("newsletter")
      .add({ email: email })
      .then(() => {
        setLoader(false);
        alert("Welcome to the club! We promise not to spam you.");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");
  };

  return (
    <Container className="w-100 h-25 pt-5 text-center">
      <Row className="m-1 pb-4" xs={1} md={1} lg={1}>
        <Col>
          <Form>
            <Form.Label className="p-2">Subscribe to our Newsletter</Form.Label>
          </Form>
        </Col>
        <Col>
          <Form.Row onSubmit={handleSubmit}>
            <Col>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderLeftColor: "transparent",
                  borderTopColor: "transparent",
                  borderRightColor: "transparent",
                }}
              />
            </Col>
          </Form.Row>
        </Col>
      </Row>
      <Container fluid className="mt-4">
        <Row className="text-center" xs={3} md={3} lg={3}>
          <Col>
            <Link to="/myaccount">My Account</Link>
          </Col>
          <Col>
            <Link>Stockist</Link>
          </Col>
          <Col>
            <Link>Policy</Link>
          </Col>
        </Row>
      </Container>
      <Row xs={1} md={1} lg={1}>
        <Col>
          <p className="footerLink text-muted p-5 text-center fs-1 sala">
            SALA Investment Co. Company
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
