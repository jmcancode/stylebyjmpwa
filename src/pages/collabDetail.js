import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Accordion,
  Card,
  Image,
} from "react-bootstrap";
import Slider from "react-slick";
// import { Link } from "react-router-dom";

import layercake11 from "../assets/RyanHunter/layercakexjm-11.JPG";
import layercake15 from "../assets/RyanHunter/layercakexjm-15.JPG";
import layercake19 from "../assets/RyanHunter/layercakexjm-19.JPG";

import { FaStar } from "react-icons/fa";

export default function CollabDetail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Container className="p-3 pb-5">
        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <Image thumbnail src={layercake15} />
              </div>
              <div>
                <Image thumbnail src={layercake11} />
              </div>
              <div>
                <Image thumbnail src={layercake19} />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h5>Louis Smoking Slipper</h5>
          </Col>
          <Col>
            <p>SBJM X LayerCake</p>
          </Col>
          <Col>
            <p>$480.00</p>
          </Col>
        </Row>
        <Row xs={2} md={2} lg={2}>
          <Col className="d-flex">
            <p className="text-muted">Colour:</p>
            <span className="fw-bold pl-2">Green</span>
          </Col>
          <Col className="text-right">
            <a href="/" style={{ color: "red" }}>
              View size guide
            </a>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Select a size</option>
                  <option>US 8.5</option>
                  <option>US 9</option>
                  <option>US 9.5</option>
                  <option>US 10</option>
                  <option>US 10.5</option>
                  <option>US 11</option>
                  <option>US 12</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "#1f1f1f", borderColor: "transparent" }}
              className="p-2"
              block
            >
              Add to bag
            </Button>
            <Button
              className="p-2"
              block
              variant="light"
              style={{ backgroundColor: "transparent", borderColor: "#1f1f1f" }}
            >
              <FaStar /> Add to Wish List
            </Button>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1} className="pt-3">
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="outlined" eventKey="0">
                    Designers Notes
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      {" "}
                      Curated by Los Angeles based artist, Horace Wormley. The
                      LayerCake - Louis Smoking Slipper embodies the elegance
                      and creative energy of the LA Native.
                      <br />
                      <br />
                      This collection is limited to 10 units and will only be
                      made in this colour-way once.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="outlined" eventKey="1">
                    Size & Fit
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Our Louis Slipper is true to size. We recommend you use your
                    Euro size for our Louis model.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="outlined" eventKey="2">
                    Details & Care
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    To extended the life of your slipper and protect your
                    investment we recommend cedar shoe inserts after each use
                    and place them in the issued dust bags. <br /> <br /> The
                    LayerCake Louis slipper features Italian calf-suede,
                    hand-painted leather soles, and trimmed with grosgrain.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
