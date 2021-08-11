import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <Fragment>
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "5%",
      }}
    >
      <Spinner animation="grow" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  </Fragment>
);

export default Loader;
