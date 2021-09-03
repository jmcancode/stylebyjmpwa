import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Card } from "react-bootstrap";
import { addLike, removeLike } from "../redux/actions/journal";

const JournalItem = ({
  auth,
  addLike,
  removeLike,
  journal: { _id, title, body, image, date, likes },
}) => (
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
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </div>
);

JournalItem.propTypes = {
  journal: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, addLike, removeLike)(JournalItem);
