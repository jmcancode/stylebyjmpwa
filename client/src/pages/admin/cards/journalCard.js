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
  });

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("Select your Image");

  const { title, body } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("image", image);
    payload.append("title", formData.title);
    payload.append("body", formData.body);
    await addJournal(payload);
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
                <Form onSubmit={onSubmit} onEncrypted="multipart/form-data">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="file"
                      value={image}
                      name={imageName}
                      accept="image/*"
                      onChange={(e) => setImage(e.target.value)}
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
                </Form>
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
