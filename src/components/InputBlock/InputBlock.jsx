import React from "react";
import { Col, Form } from "react-bootstrap";

export default function InputBlock({ data, inputHandler }) {
  return (
    <Col>
      <Form.Control type="number" id={`${data.id}`} placeholder={data.val} value={data.val} onChange={inputHandler} />
    </Col>
  );
}
