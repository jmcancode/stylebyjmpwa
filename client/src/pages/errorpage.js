import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft } from "react-icons/bs";

const FourOhFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
    >
      <Row xs={1} md={1} lg={1}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <motion.p>
            Oh snap, this page is under-construction or does not exist!
          </motion.p>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <BsChevronCompactLeft size={30} />
          <Link style={{ color: "#c60000" }} to="/">
            <small>Go back</small>
          </Link>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FourOhFour;
