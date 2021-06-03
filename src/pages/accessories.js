import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import MensImage from "../assets/Images/IMG_1327.JPG";
import { motion } from "framer-motion";
import BagImage from "../assets/Images/IMG_1261.PNG";
import FeatureImage from "../assets/Images/IMG_2709.JPG";

const AccPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container justify-content-center align-center"
    >
      <Col lg={true}>
        <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
          <Card style={{ borderColor: "transparent" }}>
            <Card.Img
              src={FeatureImage}
              width={100}
              height="100%"
              alt="Card image"
              load="lazy"
              style={{ height: "395px", objectFit: "contain" }}
            />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
              <Card.Title className="d-flex text-uppercase">Bags</Card.Title>
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
                alt="Card image"
                load="lazy"
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase">
                  Shoe Inserts
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
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="d-flex text-uppercase">Belts</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </motion.div>
  );
};

export default AccPage;
