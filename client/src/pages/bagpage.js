import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import FeatureImage from "../assets/slippers/Rose - Tan Linen - horse-Ang5.jpg";
import { motion } from "framer-motion";

const BagsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container justify-content-center align-center"
    >
      <Col style={{ height: "55vh" }} lg={true}>
        <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
          <Card style={{ borderColor: "transparent" }}>
            <Card.Img
              src={FeatureImage}
              width={100}
              height="100%"
              load="lazy"
              alt="Card image"
              style={{ height: "395px", objectFit: "scale-down" }}
            />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
              <Card.Title className="d-flex text-uppercase">
                Slippers
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Col>
    </motion.div>
  );
};

export default BagsPage;
