import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJournal } from "../../../redux/actions/journal";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaLayerGroup } from "react-icons/fa";

const JournalCard = ({ addJournal }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    image: "",
    date: "",
    author: "",
  });

  const { title, body, image, date, author } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await addJournal(formData);
  };

  return (
    <Fragment>
      <div>
        <Card className=" border-0 p-1">
          <Card.Header className="text-center d-flex justify-content-between bg-transparent">
            <small>Add a Journal</small>
            <FaLayerGroup size={24} />
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <form onSubmit={onSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="file"
                      value={image}
                      name="image"
                      accept="image/*"
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Add a Journal Title"
                      value={title}
                      name="title"
                      onChange={onChange}
                      required
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Authors Name"
                      value={author}
                      name="author"
                      onChange={onChange}
                      required
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Add a Journal Body"
                      cols="10"
                      rows="4"
                      value={body}
                      name="body"
                      onChange={onChange}
                      required
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button value="CategoryCard" variant="dark" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

JournalCard.propTypes = {
  addJournal: PropTypes.func.isRequired,
};
export default connect(null, { addJournal })(JournalCard);
