import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import MensImage from "../assets/essential-captoe.png";
import BagImage from "../assets/RyanHunter/IMG_2685.JPG";
import FeatureImage from "../assets/RyanHunter/layercakexjm-19.JPG";

const CollabPage = () => {
  return (
    <Container className="justify-content-center align-center">
      <Col sm={true}>
        <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
          <Card
            as={Link}
            to="/collabdetail"
            border="light"
            style={{ color: "#1f1f1f" }}
          >
            <Card.Img
              thumbnail
              src={FeatureImage}
              width={100}
              alt="Card image"
            />
            <Card.ImgOverlay bg="dark">
              <Card.Text className="text-left text-uppercase">
                <h5>LayerCake Los Angeles</h5>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card border="light" className="w-100 h-100">
              <Card.Img
                src={BagImage}
                width="100%"
                height="100%"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-left text-uppercase">
                  Ryan Hunter
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img
                src={MensImage}
                width="100%"
                height="100%"
                alt="Card image"
                className="p-2 pt-5"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-left text-uppercase">
                  Exchange LA
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default CollabPage;
