import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MensImage from "../assets/gywflex-infographic.jpg";

import BagImage from "../assets/sneakers.jpg";
import FeatureImage from "../assets/bag.jpg";

const AccPage = () => {
  return (
    <Container className="justify-content-center align-center">
      <Col lg={true}>
        <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
          <Card border="light">
            <Card.Img
              src={FeatureImage}
              width={100}
              height="100%"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="d-flex text-uppercase">
                Shop All
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card border="light" className="w-100 h-100">
              <Card.Img
                src={BagImage}
                width={100}
                height="100%"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="d-flex text-uppercase">
                  SNEAKERS
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
              />
              <Card.ImgOverlay>
                <Card.Title className="d-flex text-uppercase">
                  Flexi Sole
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default AccPage;
