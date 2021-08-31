import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { Col, Row, Card } from "react-bootstrap";

const JournalDetail = ({ journal: { _id, title, body, image, date } }) => (
  <div className="container">
    <Row>
      <Col>
        <Card key={_id}>
          <Card.Image src={image} alt="" />
          <Card.Header>
            <h2>{title}</h2>
          </Card.Header>
          <Card.Body>
            <p>{body}</p>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </div>
);

JournalDetail.propTypes = {
  journal: PropTypes.object.isRequired,
};

export default JournalDetail;
