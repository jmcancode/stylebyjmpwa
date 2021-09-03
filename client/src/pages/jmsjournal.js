import React, { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournal } from "../redux/actions/journal";
import "./journal.css";
import JournalItem from "./journalDetail";

const Journals = ({ getJournals, journal: { journals } }) => {
  useEffect(() => {
    getJournal();
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
              <JournalItem key={journal.id} journal={journal} />
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

Journals.propTypes = {
  journal: PropTypes.object.isRequired,
  getJournal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  journal: state.journal,
});

export default connect(mapStateToProps, { getJournal })(Journals);
