import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";

import imageOne from "../assets/loafer.jpg";
export default function ShopAllMen() {
  return (
    <>
      <Container fluid>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <CardDeck>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button size="sm" variant="light">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button size="sm" variant="light">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button size="sm" variant="light">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className="mt-3" xs={1} md={1} lg={1}>
          <Col>
            <CardDeck>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button size="sm" variant="light">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button size="sm" variant="light">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
              <Card border="light">
                <Card.Img variant="top" src={imageOne} />
                <Card.Body>
                  <Card.Title>Louis Loafer</Card.Title>
                  <Card.Text>
                    <small>
                      {" "}
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.{" "}
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <Button variant="light" size="sm">
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="h-25"></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
