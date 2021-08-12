import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import blogImage from "../assets/Images/IMG_0765.JPG";
const JMsJournal = () => {
  return (
    <React.Fragment>
      <Container>
        <Row xs={2} md={2} lg={2}>
          <Col sm={4}>
            <Card style={{ borderColor: "transparent " }}>
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                <Card.Title>Blog Title</Card.Title>
                <Card.Text>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="danger">Go somewhere</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form>
              <Form.Control type="search" placeholder="search blog posts..." />
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default JMsJournal;
