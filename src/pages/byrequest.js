import React from "react";
import { Col, Row, Container } from "react-bootstrap";
const ByRequestPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">By Request</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">Request a catalog</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ByRequestPage;
