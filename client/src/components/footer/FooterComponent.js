import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./foooter.css";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function FooterComponent() {
  const [email, setEmail] = useState("");
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className=" container pt-3 mt-3 text-left"
        style={{ backgroundColor: "#f5f5f5", width: "100%", borderRadius: 5 }}
      >
        <Row className="m-1 pb-4" xs={1} md={1} lg={1}>
          <Col>
            <Form>
              <Form.Label style={{ fontSize: 12 }} className=" text-uppercase">
                Subscribe for the latest releases
              </Form.Label>
              <Form.Text>
                <p>
                  Stay informed about the latest style updates and product
                  launches. Learn more about email and our Privacy Policy.
                </p>
              </Form.Text>
            </Form>
          </Col>
          <Col>
            <Form.Row>
              <Col>
                <Form.Label className="pl-1 pt-3">Email Address</Form.Label>
                <InputGroup>
                  <Form.Control
                    placeholder="your@address.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      borderLeftColor: "transparent",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                    }}
                  />
                  <InputGroup.Append>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#1f1f1f",
                        borderColor: "transparent",
                        color: "#1f1f1f",
                      }}
                    >
                      submit
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Form.Row>
          </Col>
        </Row>
        <Row className="text-center p-5 m-1" xs={4} md={4} lg={4}>
          <Col>
            <SocialIcon
              rel="noopener noreferrer"
              target="__blank"
              bgColor="#777"
              url="https://twitter.com/jm_cancode"
            />
          </Col>
          <Col>
            <SocialIcon
              rel="noopener noreferrer"
              target="__blank"
              bgColor="#777"
              url="https://facebook.com/stylebjmsa"
            />
          </Col>
          <Col>
            <SocialIcon
              bgColor="#777"
              url="https://instagram.com/sbjmfootwear"
              rel="noopener noreferrer"
              target="__blank"
            />
          </Col>
          <Col>
            <SocialIcon
              bgColor="#777"
              url="https://pinterest.com/theroyalguardsa"
              rel="noopener noreferrer"
              target="__blank"
            />
          </Col>
        </Row>
      </motion.div>
      <Container fluid className="mt-4">
        <Row className=" text-uppercase text-center" xs={3} md={3} lg={3}>
          <Col>
            <Link style={{ color: "#777" }} to="/myaccount">
              Corporate
            </Link>
          </Col>
          <Col>
            <Link style={{ color: "#777" }} to="/stockist">
              At your service
            </Link>
          </Col>
          <Col>
            <Link style={{ color: "#777" }} to="/policy">
              Customer Care
            </Link>
          </Col>
          <Col>
            <Link style={{ color: "#777" }} to="/legal"></Link>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <Row xs={1} md={1} lg={1} className="pt-5 m-4">
          <Col sm style={{ color: "#d0d6d7" }}>
            <p className="text-center">
              © Style by JM Footwear 2021. All rights reserved.
            </p>
          </Col>
          <Col sm className="mb-3" style={{ color: "#d6d6d7" }}>
            <small className="text-center">
              Design & Dev by
              <a
                href="https://jonmichaelnarvaez.com"
                rel="noopener noreferrer"
                target="__blank"
                style={{ color: "#d6d6d7" }}
              >
                B-Boy Creative
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
