import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const FooterComponent = () => {
  return (
    <Container className="w-100 h-25 pt-5 text-center">
      <Row className="m-1 pb-4" xs={1} md={1} lg={1}>
        <Col>
          <Form>
            <Form.Label>Newsletter</Form.Label>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Control size="sm" type="email" placeholder="Enter email" />
          </Form>
        </Col>
      </Row>
      <Row xs={4} md={4} lg={4}>
        <Col>
          <Link to="/myaccount">Account</Link>
        </Col>
        <Col>
          <Link>Location</Link>
        </Col>
        <Col>
          <Link>Policy</Link>
        </Col>
        <Col>
          <Link>Account</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted p-5 text-center">
            SALA Investment Co. Company
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
