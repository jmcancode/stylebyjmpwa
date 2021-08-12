import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
//redux
import { setAlert } from "../../redux/actions/alert";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SignUp = ({ isAuthenticated, setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col>
            <Card className="p-3 m-2 shadow-sm">
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label style={{ fontFamily: "Montserrat" }}>
                    Sign-up
                  </Form.Label>
                  <Form.Control
                    style={{
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      borderRightColor: "transparent",
                    }}
                    type="text"
                    placeholder="full name"
                    className="mb-2"
                    onChange={onChange}
                    value={name}
                    name="name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="fullname@anemail.com"
                    className="mb-2"
                    onChange={onChange}
                    value={email}
                    name="email"
                    style={{
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      borderRightColor: "transparent",
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    className="mb-2"
                    onChange={onChange}
                    value={password}
                    name="password"
                    style={{
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      borderRightColor: "transparent",
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="confirm password"
                    onChange={onChange}
                    value={password2}
                    name="password2"
                    style={{
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      borderRightColor: "transparent",
                    }}
                  />
                </Form.Group>
                <div className="d-grid gap-2 pt-2">
                  <Button variant="danger" type="submit" value="SignUp">
                    Sign-up
                  </Button>
                </div>
              </Form>
              <small className="text-end pt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#c60000" }}
                >
                  Login
                </Link>
              </small>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProp, { setAlert, register })(SignUp);
