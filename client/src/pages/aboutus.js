import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/view-drone-historic-center-spanish-city-almansa-overlooking-ancient-fortified-castle-bell-tower-roman-catholic-church-201208270.jpg";
const AboutUsPage = () => {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="card border-light p-2"
      >
        <Card.Img
          src={bgImage}
          alt="Card image"
          load="lazy"
          style={{
            height: "355px",
            objectFit: "cover",
            objectPosition: "0% 10%",
            opacity: "0.79",
          }}
        />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <Card.Title className="text-white text-uppercase">
            <h2 className="text-wrap">Almansa, Spain</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <Row className="pt-4">
          <Col>
            <p className="text-left">
              Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
              suscipit tortor eget felis porttitor volutpat. Curabitur arcu
              erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor
              lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia Curae; Donec velit neque, auctor sit
              amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet
              quam id dui posuere blandit. Cras ultricies ligula sed magna
              dictum porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
              <br />
              <br />
              Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit
              tortor eget felis porttitor volutpat. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl
              tempus convallis quis ac lectus. Nulla quis lorem ut libero
              malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.
              <br />
              <br />
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget
              felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
              auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed
              porttitor lectus nibh. Curabitur aliquet quam id dui posuere
              blandit. Donec rutrum congue leo eget malesuada.
            </p>
          </Col>
        </Row>
      </motion.div>
    </React.Fragment>
  );
};

export default AboutUsPage;
