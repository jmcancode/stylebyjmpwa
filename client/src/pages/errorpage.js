import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const FourOhFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
    >
      <Row>
        <Col>
          <p>Oh snap, this pages isn't real!</p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FourOhFour;
