import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/auth";

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
                    Login
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    className="mb-2"
                    value={email}
                    name="email"
                    onChange={onChange}
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
                  <Button variant="danger">Login</Button>
                </div>
              </Form>
              <small className="text-end pt-2">
                Need an account?{" "}
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#c60000" }}
                >
                  Sign-up
                </Link>
              </small>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
