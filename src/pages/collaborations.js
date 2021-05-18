import React from "react";
import { Col, Button, Row, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MensImage from "../assets/Images/IMG_0778.JPG";
import BagImage from "../assets/RyanHunter/IMG_2685.JPG";
import FeatureImage from "../assets/RyanHunter/layercakexjm-15.JPG";

const CollabPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      fluid
      className="justify-content-center align-center container"
    >
      <Row noGutters={true} xs={1} md={1} lg={1} className="w-100">
        <Col>
          <motion.div
            className="card"
            to="/collabdetail"
            border="light"
            style={{
              color: "#1f1f1f",
              backgroundColor: "#fdfdfd",
              borderColor: "transparent",
            }}
          >
            <Card.Img
              thumbnail
              src={FeatureImage}
              width={100}
              alt="Card image"
              style={{
                height: "395px",
                objectFit: "scale-down",
              }}
            />
            <Card.ImgOverlay
              className="d-flex justify-content-start align-items-end"
              bg="dark"
            >
              <Card.Text className=" d-column-flex justify-content-end align-center text-uppercase">
                <h5>
                  LayerCake <span style={{ color: "red" }}>Los Angeles</span>
                </h5>
                <Button as={Link} to="/collabdetail" size="sm" variant="light">
                  Shop
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </motion.div>
        </Col>
        <Row noGutters={true} className="pt-2" xs={12} md={2} lg={2}>
          <Col sm>
            <Card
              style={{ borderColor: "transparent" }}
              className="w-100 h-100 "
            >
              <Card.Img
                src={BagImage}
                width="100%"
                alt="Card image"
                style={{
                  height: "395px",
                  objectFit: "cover",
                }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="text-left text-uppercase">
                  <h5>Ryan Hunter</h5>
                  <Button
                    as={Link}
                    to="/collabdetail"
                    size="sm"
                    variant="light"
                  >
                    Shop
                  </Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm>
            <Card
              style={{ borderColor: "transparent" }}
              className=" p-1 "
            >
              <Card.Img
                src={MensImage}
                width="100%"
                height="100%"
                alt="Card image"
                className="p-2 pt-5"
                style={{
                  height: "395px",
                  objectFit: "scale-down",
                  objectPosition: "100% -50%",
                }}
              />
              <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
                <Card.Title className="text-left text-uppercase">
                  <h5>Exchange LA</h5>
                  <Button
                    as={Link}
                    to="/collabdetail"
                    size="sm"
                    variant="light"
                  >
                    Shop
                  </Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Row>
    </motion.div>
  );
};

export default CollabPage;
