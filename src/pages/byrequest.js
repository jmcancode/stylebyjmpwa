import React, { useState } from "react";
import { Col, Row, Image, Modal, Card, Form, Button } from "react-bootstrap";
import PhotoOne from "../assets/loafer.jpg";
import PurpleOne from "../assets/purplestach.jpg";
import SneakerOne from "../assets/sneakers.jpg";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { motion } from "framer-motion";

const ByRequestPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <Row noGutters={true}>
          <Col>
            <h1 className="text-center">By Request</h1>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Proin eget tortor risus. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
              malesuada. Donec rutrum congue leo eget malesuada. Donec rutrum
              congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. <br /> <br />
              Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue
              leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
              Donec rutrum congue leo eget malesuada. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt.
              <br />
              <br /> Quisque velit nisi, pretium ut lacinia in, elementum id
              enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit
              amet dui. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
              id orci porta dapibus.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-left">
              Preview our catalog{" "}
              <a
                href="https://stylexjm.made-to-order.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                here.
              </a>
            </p>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Button onClick={handleShow} size="sm" variant="dark" block>
              Schedule a private build
            </Button>
          </Col>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>A little about you</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="First Last" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="firstlast@example.com"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="210-123-1234" />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Budget</Form.Label>
                  <Form.Control as="select">
                    <option>Choose one...</option>
                    <option>$250.00 - $500.00</option>
                    <option>$500.00 - $1,000.00</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select a Location</Form.Label>
                  <Form.Control as="select">
                    <option>Choose one...</option>
                    <option>Dominion Ridge - San Antonio</option>
                    <option>Geekdom</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Datetime
                  closeOnSelect={true}
                  closeOnClickOutside={true}
                  dateFormat={true}
                  timeFormat={true}
                  value={new Date()}
                />
                <Button className="mt-2" variant="dark" block type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
        <Row className="text-center" xs={3} md={3} lg={3}>
          <Col>
            <Image
              fluid
              src={PhotoOne}
              alt="shoe one"
              width={200}
              height={200}
            />
          </Col>
          <Col>
            <Image
              fluid
              src={PurpleOne}
              alt="shoe one"
              width={200}
              height={200}
            />
          </Col>
          <Col>
            <Image
              fluid
              src={SneakerOne}
              alt="shoe one"
              width={200}
              height={200}
            />
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default ByRequestPage;
