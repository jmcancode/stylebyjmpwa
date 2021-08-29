import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogImage from "../assets/Images/IMG_0765.JPG";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournals } from "../redux/actions/journal";
import formatDate from "../redux/utils/formatDate";

const JMsJournal = ({ getJournals, journal: { journals } }) => {
  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <React.Fragment>
      <Container>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Form>
              <Form.Control type="search" placeholder="search blog posts..." />
            </Form>
          </Col>
          <Col>
            {journals.map((journal) => (
              <Card key={journal._id} style={{ borderColor: "transparent " }}>
                <Card.Img variant="top" src={journal.image} />
                <Card.Body>
                  <Card.Title>Style & Substance: {journal.title}</Card.Title>
                  <Card.Text>{journal.body}</Card.Text>
                  <div className="d-grid gap-2">
                    <Button
                      as={Link}
                      // to={`/jmsjournal/${_id}`}
                      variant="danger"
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "transparent" }}>
                  <small className="text-muted text-end">
                    Posted on: {formatDate(journal.date)}{" "}
                  </small>
                </Card.Footer>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

JMsJournal.propTypes = {
  journal: PropTypes.object.isRequired,
  getJournals: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  journal: state.journal,
});

export default connect(mapStateToProps, { getJournals })(JMsJournal);
