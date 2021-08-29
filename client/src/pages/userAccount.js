import React from "react";
import { Row, Col, Card, Nav, Tab, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./pages.css";
import { Link } from "react-router-dom";

const userAccount = () => {
  return (
    <motion.div className="container" style={{ height: "100vh" }}>
      <Row className="m-2">
        <Col sm={12} className="text-center">
          <h3>My Account</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            className="shadow-sm"
            style={{ height: "100%", padding: "20px" }}
            pt-2
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Address Book</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Account Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Appointment Book</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col>
                          <h5>Account Information</h5>
                        </Col>
                      </Row>
                      <Row xs={1} md={2} lg={2}>
                        <Col className="pt-3">
                          <p>Contact Information</p>
                          <hr />
                          <p>Jon-Michael Narvaez</p>
                          <p>jm@stylexjm.com</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <button className="btn btn-danger">Edit</button>
                            <button className="btn btn-danger">
                              Change password
                            </button>
                          </div>
                        </Col>
                        <Col className="pt-3">
                          <p>Newsletter</p>
                          <hr />
                          <p>You're subscribed</p>

                          <div>
                            <button className="btn btn-danger">Edit</button>
                          </div>
                        </Col>
                      </Row>
                      <Row xs={1} md={2} lg={2} className="pt-5">
                        <Col className="pt-3">
                          <p>Default Billing Address</p>
                          <hr />
                          <p>You have not set a default billing address.</p>
                          <div>
                            <button className="btn btn-danger">Edit</button>
                          </div>
                        </Col>
                        <Col className="pt-3">
                          <p>Default Shipping Address</p>
                          <hr />
                          <p>You have not set a default shipping address.</p>
                          <div>
                            <button className="btn btn-danger">Edit</button>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col>
                          <h5>You have no orders yet</h5>
                          <button className="btn btn-danger">
                            Start Shopping
                          </button>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col>
                          <p>Lorem Ipsum 2</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        <Col>
                          <p>Lorem Ipsum 3</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        <Col>
                          <p>Lorem Ipsum 4</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <Row>
                        <Col>
                          <p>Lorem Ipsum 5</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card>
        </Col>
      </Row>
      <Row className="p-4">
        <Col className="text-end">
          <Button variant="dark" as={Link} to="/admin-panel">
            Founders
          </Button>
        </Col>
      </Row>
    </motion.div>
  );
};

export default userAccount;
