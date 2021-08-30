import React from "react";
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { GiConverseShoe } from "react-icons/gi";
export default function ProductsCard() {
  return (
    <div className="container">
      <Row>
        <Col>
          <Card className=" border-0 p-1">
            <Card.Header className="text-center d-flex justify-content-between bg-transparent">
              <small>Add a Product</small>
              <GiConverseShoe size={24} />
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Control type="file" accept="image/png" />
                </Form.Group>
                <FloatingLabel label="Enter product name" className="mb-2">
                  <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel
                  label="How many units is available?"
                  className="mb-2"
                >
                  <Form.Control type="number" />
                </FloatingLabel>
                <FloatingLabel
                  label="How much is this product?"
                  className="mb-2"
                >
                  <Form.Control type="number" placeholder="enter price" />
                </FloatingLabel>
                <FloatingLabel
                  label="Add a product Description"
                  className="mb-2"
                >
                  <Form.Control as="textarea" cols="10" rows="4" required />
                </FloatingLabel>
                <div className="d-grid gap-2">
                  <Button value="CategoryCard" variant="dark" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
