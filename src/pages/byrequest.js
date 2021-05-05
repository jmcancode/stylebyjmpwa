import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import PhotoOne from "../assets/loafer.jpg";
import PurpleOne from "../assets/purplestach.jpg";
import SneakerOne from "../assets/sneakers.jpg";
const ByRequestPage = () => {
  return (
    <>
      <Container>
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
      </Container>
      <Container className="h-25">
        <Row>
          <Col>
            {/* <Card>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Schedule a discovery meeting</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Control type="phone" placeholder="Phone Number" />
                    <Form.Control typle="text" placeholder="City" />
                    <Form.Control typle="text" placeholder="State" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ByRequestPage;
