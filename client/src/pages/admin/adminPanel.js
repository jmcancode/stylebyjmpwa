import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import JournalCard from "./cards/journalCard";

export default function AdminPanel() {
  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col>
            <JournalCard />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
