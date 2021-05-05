import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { db } from "../firebase/config";
import { useAuth } from "../firebase/context";

const UserAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [loader, setLoader] = useState("");
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);

  const handleUserSumbit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("users")
      .add({
        email: email,
        password: password,
        displayName: displayName,
        address: address,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
      })
      .then(() => {
        setLoader(false);
        alert("Your account was successfully set up. Welcome!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");
    setPassword("");
    setDisplayName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={1} lg={1}>
          <Col>
            {!currentUser && <h5>User Profile</h5>}
            <Form onSubmit={handleUserSumbit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    type="text"
                    placeholder="First & Last"
                    required
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="Password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="1234 Main St"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
                  placeholder="Apartment, studio, or floor #"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="San Antonio"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    as="select"
                    defaultValue="Choose..."
                    required
                  >
                    <option>Choose...</option>
                    <option>TX</option>
                    <option>CA</option>
                    <option>FL</option>
                    <option>NY</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="78205"
                    required
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Billing & Shipping" />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: loader ? "rgba(2,2,0)" : "transparent",
                  borderColor: "transparent",
                  color: "red",
                }}
                block
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col>
            <h5>Payment Information</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name on card</Form.Label>
                <Form.Control placeholder="Jon Doe" required />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control placeholder="4242 4242 4242 4242" required />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control type="number" placeholder="12/25" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="number" placeholder="CVV" required />
                </Form.Group>
              </Form.Row>
              <Button
                style={{
                  backgroundColor: loader ? "rgba(2,2,0)" : "transparent",
                  borderColor: "transparent",
                  color: "red",
                }}
                block
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserAccount;
