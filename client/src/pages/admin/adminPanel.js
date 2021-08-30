import React, { Fragment } from "react";
import { Row, Col, Table } from "react-bootstrap";
import AppCard from "./cards/appointmentCard";
import JournalCard from "./cards/journalCard";
import ProductsCard from "./cards/productsCard";

export default function AdminPanel() {
  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col>
            <h4>Operations</h4>
          </Col>
        </Row>
        <hr />
        <Row xs={1} md={2} lg={3}>
          <Col>
            <JournalCard />
          </Col>
          <Col>
            <ProductsCard />
          </Col>
          <Col>
            <AppCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Stats</h4>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Table></Table>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
