import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const FourOhFour = () => {
  return (
    <motion.div className="container">
      <Row>
        <Col>
          <p>Oh snap, this pages isn't real!</p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FourOhFour;
