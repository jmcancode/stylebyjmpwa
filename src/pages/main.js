import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import MensImage from "../assets/gywflex-infographic.jpg";
import ByRequestImage from "../assets/loafer.jpg";
import AccessoriesImage from "../assets/1-2.jpg";
import DGandyImage from "../assets/dgandy.jpg";
import BagImage from "../assets/bag.jpg";
import FeatureImage from "../assets/madeinspain.png";
import EssentialImage from "../assets/feature.jpg";

const MainPage = () => {
  return (
    <>
      <Container>
        <Col lg={true}>
          <Row noGutters={true} xs={1} md={1} lg={1} className="w-100 p-1">
            <Col>
              <Card border="light" className="bg-transparent text-black ">
                <Card.Img
                  src={FeatureImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    a product of almansa, spain
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="p-1">
            <Col>
              {" "}
              <Card border="light">
                <Card.Img
                  src={BagImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center bg-light">
                    Bags
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="light">
                <Card.Img
                  src={MensImage}
                  width="100%"
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    Goodyear Welt Flexi Sole
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={1} className="p-1">
            <Col>
              <Card
                border="light"
                className="bg-transparent text-black text-center"
              >
                <Card.Img
                  src={DGandyImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    Mens
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="p-1">
            <Col>
              {" "}
              <Card
                border="light"
                className="bg-transparent text-black text-center"
              >
                <Card.Img
                  src={AccessoriesImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title cclassName="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    Accessories
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="light" className="bg-transparent text-black">
                <Card.Img
                  src={ByRequestImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    By Request
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={1} className="p-1">
            <Col>
              {" "}
              <Card border="light" className="bg-transparent text-black">
                <Card.Img
                  src={EssentialImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="d-flex text-uppercase mt-5 text-center align-center bg-light">
                    Essentials
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default MainPage;
