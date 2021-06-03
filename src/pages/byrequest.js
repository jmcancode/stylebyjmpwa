import React, { useState } from "react";
import { Col, Row, Image, Modal, Form, Button, Card } from "react-bootstrap";
import PhotoOne from "../assets/loafer.jpg";
import PurpleOne from "../assets/purplestach.jpg";
import SneakerOne from "../assets/29a3bcc8-f078-4663-b078-8f9a0325b8ec-B.jpg";

import "react-datetime/css/react-datetime.css";
import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import bgImage from "../assets/PH4_5258.jpg";
import { db } from "../firebase/config";

const ByRequestPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);

    db.collection("byRequestApps")
      .add({
        fullName: fullName,
        email: email,
        tel: tel,
        budget: budget,
        location: location,
      })
      .then(() => {
        setLoading(false);
        alert(
          "Successful request, a member of our team will contact you within 48 hours to schedule a time and date."
        );
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
    setFullName("");
    setEmail("");
    setBudget("");
    setLocation("");
    setTel("");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="card border-light p-2"
        style={{ borderColor: "transparent" }}
      >
        <Card.Img
          src={bgImage}
          alt="Card image"
          load="lazy"
          style={{
            height: "355px",
            objectFit: "cover",
            padding: 5,
            opacity: ".79",
          }}
        />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <Card.Title className="text-white display-4 text-uppercase">
            <h2 style={{ fontSize: "3rem" }}>By Request</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <Row className="pt-4" noGutters={true}>
          <Col>
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
        <Row xs={1} md={3} lg={3}>
          <Col>
            <Button
              style={{ color: "#1f1f1f", textDecoration: "none" }}
              onClick={handleShow}
              size="sm"
              variant="link"
            >
              <BiCalendar color="#1f1f1f" className="mb-1" /> Schedule a viewing
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
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="First Last"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="firstlast@example.com"
                      required
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      placeholder="210-123-1234"
                      required
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Your budget</Form.Label>
                  <Form.Control
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    as="select"
                    required
                  >
                    <option>Choose one...</option>
                    <option>$250.00 - $500.00</option>
                    <option>$500.00 - $1,000.00</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select a Location</Form.Label>
                  <Form.Control
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    as="select"
                    required
                  >
                    <option>Choose one...</option>
                    <option>In-Home</option>
                    <option>In-Office</option>
                    <option>Geekdom</option>
                    <option>Dominion Ridge</option>
                  </Form.Control>
                </Form.Group>
                {/* <Datetime
                  closeOnSelect={true}
                  closeOnClickOutside={true}
                  dateFormat={true}
                  timeFormat={true}
                  placeholder="select a date and time"
                  value={dateTimer}
                  onChange={(e) => setDateTimer(e.target.value)}
                  required
                /> */}
                <Button className="mt-2" variant="dark" block type="submit">
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
        <Row className="text-center pt-3" xs={3} md={3} lg={3}>
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
