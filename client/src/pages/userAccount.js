import React from "react";
import { Row, Col, Card, Nav, Tab, Button, Image, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import "./pages.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const userAccount = ({ auth: { user } }) => {
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
                          <Image
                            thumbnail
                            roundedCircle
                            src={user.avatar}
                            alt="avatar"
                            width={80}
                            height={80}
                          />
                          <p>{user.name}</p>
                          <p>{user.email}</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <button
                              className="btn btn-danger"
                              style={{ marginRight: "9px" }}
                            >
                              Edit
                            </button>
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
                          <h5>You have no addresses yet</h5>
                          <button className="btn btn-danger">
                            Add an Address
                          </button>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row xs={1} md={2} lg={2}>
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
                        <Col className="pt-3">
                          <p>Credit Card Information</p>
                          <hr />
                          <p>No credit card of file.</p>
                          <div>
                            <button className="btn btn-danger">
                              Add a credit card
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        <Col>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="switch"
                              label="Notifications"
                            />
                          </Form>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <Row>
                        <Col>
                          <p>You have no appointments set</p>
                          <div>
                            <button className="btn btn-danger">
                              Schedule an appointment
                            </button>
                          </div>
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

userAccount.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(userAccount);
