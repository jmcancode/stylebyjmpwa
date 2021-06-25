import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col, Row } from "react-bootstrap";
import { useAuth } from "../../firebase/context";

import { Link, useHistory } from "react-router-dom";

import { motion } from "framer-motion";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mt-5 pt-5 pl-4 pr-4 w-100 h-100"
      >
        <Row>
          <Col>
            <Card style={{ borderColor: "transparent" }}>
              <Card.Body>
                <h2 className="text-center mb-4">Welcome back</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button
                    variant="danger"
                    disabled={loading}
                    className="w-100"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>

                <div className="w-100 text-right mt-3">
                  <Link className="text-muted" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-muted text-right pr-4">
              Need an account?{" "}
              <Link className="text-muted" to="/register">
                Sign Up
              </Link>
            </div>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}
