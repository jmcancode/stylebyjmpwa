import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import MensImage from "../assets/gywflex-infographic.jpg";
import DGandyImage from "../assets/dgandy.jpg";
import BagImage from "../assets/sneakers.jpg";
import FeatureImage from "../assets/bag.jpg";

const MensPage = () => {
  return (
    <Container className="justify-content-center align-center">
      <Col lg={true}>
        <Row xs={1} md={1} lg={1} className="w-100">
          <Card border="light" className="bg-transparent text-black ">
            <Card.Img
              src={FeatureImage}
              width={100}
              height="100%"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="d-flex text-uppercase">
              bags
            </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            {" "}
            <Card border="light" className="bg-transparent text-black">
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
            {" "}
            <Card border="light" className="bg-transparent text-black">
              <Card.Img
                src={MensImage}
                width="100%"
                height="100%"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="d-flex text-uppercase">
                Goodyear Welt Flexi Sole
              </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="light" className="bg-transparent text-black">
              <Card.Img
                src={DGandyImage}
                width={100}
                height="100%"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="d-flex text-uppercase text-white">
                ESSENTIALS
              </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default MensPage;
