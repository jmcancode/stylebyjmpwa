import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import MensImage from "../assets/gywflex-infographic.jpg";
import ByRequestImage from "../assets/loafer.jpg";
import AccessoriesImage from "../assets/1-2.jpg";
import DGandyImage from "../assets/Chaussures de costume - Noir Parfait - Jean-Coltrane - Bobbies.jpg";
import BagImage from "../assets/bag/9382718c-9a79-4a65-be4f-7d3e1d015a7b-D.jpg";
import FeatureImage from "../assets/madeinspain.png";
import EssentialImage from "../assets/feature.jpg";
import { motion } from "framer-motion";
const MainPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container fluid"
      >
        <Col lg={true}>
          <Row noGutters={true} xs={1} md={1} lg={1} className="w-100 p-1">
            <Col>
              <Card
                style={{ borderColor: "transparent" }}
                className="bg-transparent text-black "
              >
                <Card.Img
                  load="lazy"
                  src={FeatureImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  style={{
                    height: "395px",
                    objectFit: "cover",
                    objectPosition: "0% 50%",
                  }}
                />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                  <Card.Title className="text-uppercase text-white ">
                    <h3> a product of almansa, spain</h3>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="p-1">
            <Col>
              {" "}
              <Card className="w-100 h-100">
                <Card.Img
                  src={BagImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  load="lazy"
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                  <Card.Body className="text-uppercase mt-5 ">Bags</Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ borderColor: "transparent" }}>
                <Card.Img
                  src={MensImage}
                  width="100%"
                  height="100%"
                  load="lazy"
                  alt="Card image"
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                  <Card.Body className="text-uppercase mt-5">
                    Goodyear Welt Flexi Sole
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={1} className="p-1">
            <Col>
              <Card style={{ borderColor: "transparent" }}>
                <Card.Img
                  src={DGandyImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  load="lazy"
                  style={{
                    height: "395px",
                    objectFit: "cover",
                    objectPosition: "0% 67%",
                  }}
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                  <Card.Body className="text-uppercase mt-5 text-white">
                    Mens
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="p-1">
            <Col>
              {" "}
              <Card style={{ borderColor: "transparent" }}>
                <Card.Img
                  src={AccessoriesImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  load="lazy"
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                  <Card.Body className=" text-uppercase mt-5">
                    Accessories
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ borderColor: "transparent" }}>
                <Card.Img
                  src={ByRequestImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  load="lazy"
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                  <Card.Body className="text-uppercase mt-5 ">
                    By Request
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={1} className="p-1">
            <Col>
              {" "}
              <Card
                style={{ borderColor: "transparent" }}
                className="bg-transparent text-black"
              >
                <Card.Img
                  src={EssentialImage}
                  width={100}
                  height="100%"
                  alt="Card image"
                  load="lazy"
                  style={{
                    height: "395px",
                    objectFit: "cover",
                    objectPosition: "100% 60%",
                  }}
                />
                <Card.ImgOverlay className="d-flex justify-content-start align-items-end text-white">
                  <Card.Body className="text-uppercase mt-5">
                    Essentials
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </motion.div>
    </>
  );
};

export default MainPage;
