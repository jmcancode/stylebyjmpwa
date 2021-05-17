import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function StockistLocation() {
  return (
    <>
      <Container fluid>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card>
              <Card.Body>
                <p>Satels</p>
                <a href="tel: +12108223376">(210) 822-3376</a>
                <p>5100 Broadway St. San Antonio TX, 78209 </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <p>Studio 139</p>
                <a href="https://studio-139.com">studio-139</a>
                <p>5100 Broadway St. San Antonio TX, 78209 </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <p>Hotel Emma - Private Guest</p>
                <a href="https://studio-139.com">hotel-emma.co</a>
                <p>5100 Broadway St. San Antonio TX, 78209 </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <p>Exchange LA</p>
                <a href="tel: +12108223376">(210) 822-3376</a>
                <p>5100 Broadway St. San Antonio TX, 78209 </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
