import React from "react";
import { motion } from "framer-motion";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Row, Col } from "react-bootstrap";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <motion.div className="sign-in-and-sign-up container">
    <Row xs={1} md={2} lg={2}>
      <Col sm>
        <SignIn />
      </Col>

      <Col sm>
        <SignUp />
      </Col>
    </Row>
  </motion.div>
);

export default SignInAndSignUpPage;
