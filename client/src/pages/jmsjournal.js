import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import blogImage from "../assets/Images/IMG_0765.JPG";

const JMsJournal = () => {
  return (
    <React.Fragment>
      <Container>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Form>
              <Form.Control type="search" placeholder="search blog posts..." />
            </Form>
          </Col>
          <Col>
            <Card style={{ borderColor: "transparent " }}>
              <Card.Img variant="top" src={blogImage} />
              <Card.Body>
                <Card.Title>Chelsea Boots</Card.Title>
                <Card.Text>
                  The English style boot thats both casual and somewhat formal.
                  The Chelsea boot first ...
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="danger">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default JMsJournal;
