import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProfitChart from "../../components/charts/profitsChart";
import UnitsChart from "../../components/charts/unitSales";
import AppCard from "./cards/appointmentCard";
import JournalCard from "./cards/journalCard";
import ProductsCard from "./cards/productsCard";
import Calendar from "react-calendar";

export default function AdminPanel() {
  const [value, onChange] = useState(new Date());
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
            <h4>Schedule</h4>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="p-5">
            <Calendar onChange={onChange} value={value} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Statistics</h4>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md className="mb-2">
            <small>Profit & Loss</small>
            <ProfitChart />
          </Col>
          <Col md className="mb-2">
            <small>Unit Sales</small>
            <UnitsChart />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
