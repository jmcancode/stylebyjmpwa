import React, { useState } from "react";
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";

export default function AppCard() {
  return (
    <div className="container">
      <Row>
        <Col>
          <Card className=" border-0 p-1">
            <Card.Header className="text-center d-flex justify-content-between bg-transparent">
              <small>By Request Appointment</small>
              <FiCalendar size={24} />
            </Card.Header>
            <Card.Body>
              <Form>
                <FloatingLabel label="Customers Name" className="mb-2">
                  <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel label="Customers Email" className="mb-2">
                  <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel label="Customers Phone #" className="mb-2">
                  <Form.Control type="number" />
                </FloatingLabel>
                <Form.Group>
                  <Form.Label>Day & Time of Appointment</Form.Label>
                  <input className="mb-2" type="datetime-local" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
