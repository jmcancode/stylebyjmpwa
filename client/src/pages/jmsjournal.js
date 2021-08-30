import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import blogImage from "../assets/Black Slipper/DSC01343.JPG";
import { GrFavorite } from "react-icons/gr";
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
          <Col className="pb-5">
            <Form className="p-3" encType="multipart/form-data">
              <Form.Control
                type="search"
                placeholder="Search"
                style={{
                  borderTopColor: "transparent",
                  borderRightColor: "transparent",
                  borderLeftColor: "transparent",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              />
            </Form>
          </Col>
          <Col>
            {journals.map((journal) => (
              <Card
                className="p-3"
                key={journal._id}
                style={{ borderColor: "transparent " }}
              >
                <Card.Img rounded fluid variant="top" src={journal.image} />
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    <span style={{ color: "#777" }}> JM's Journal:</span>{" "}
                    {journal.title}
                  </Card.Title>
                  <Card.Text>{journal.body}</Card.Text>
                  <div className="d-grid gap-2">
                    <Button
                      as={Link}
                      to={`/jmsjournal/${journal._id}`}
                      variant="dark"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "transparent" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <small className="text-muted text-end">
                      Posted on: {formatDate(journal.date)}
                    </small>
                    <GrFavorite size={20} color="#ef426f" />
                  </div>
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
