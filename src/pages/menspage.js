import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import MensImage from "../assets/Chelsea Boot - Diego/DSC01538.JPG";
import DGandyImage from "../assets/Chaussures de costume - Châtaigne - Jean-Dillinger - Bobbies.jpg";
import SlipOn from "../assets/slippers/wellington-flannel-blue-+-embroidery_5.jpg";
import BagImage from "../assets/sneakers.jpg";
import FeatureImage from "../assets/_.jpeg";
import { Link } from "react-router-dom";
const MensPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="justify-content-center align-center container"
    >
      <Col lg={true}>
        <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
          <Card
            as={Link}
            to="/shopallmens"
            style={{ borderColor: "transparent" }}
          >
            <Card.Img
              src={FeatureImage}
              width={100}
              height="100%"
              alt="Card image"
              load="lazy"
              style={{
                height: "395px",
                objectFit: "cover",
                objectPosition: "0% 100%",
              }}
            />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
              <Card.Title className="d-flex text-white text-uppercase">
                <h2>Shop All</h2>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card
              style={{ borderColor: "transparent" }}
              className="w-100 h-100"
            >
              <Card.Img
                src={BagImage}
                width={100}
                height="100%"
                load="lazy"
                alt="Card image"
                style={{ height: "395px", objectFit: "cover" }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase">
                  SNEAKERS
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card style={{ borderColor: "transparent" }}>
              <Card.Img
                src={MensImage}
                width="100%"
                height="100%"
                alt="Card image"
                load="lazy"
                style={{
                  height: "395px",
                  objectFit: "cover",
                  objectPosition: "100% 0%",
                }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase">
                  Diego Chelsea
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ borderColor: "transparent" }}>
              <Card.Img
                src={SlipOn}
                width={100}
                height="100%"
                load="lazy"
                alt="Card image"
                style={{ height: "395px", objectFit: "scale-down" }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase text-black">
                  Slip-on
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
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
                  objectPosition: "0% 50%",
                }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase text-white">
                  ESSENTIALS
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </motion.div>
  );
};

export default MensPage;
