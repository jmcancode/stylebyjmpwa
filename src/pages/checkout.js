import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StripeCheckoutButton from "../components/stripe-button/stripe-button-component";
const CheckoutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <StripeCheckoutButton />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
