import React, {useState} from "react";
import InputBlock from "../InputBlock/InputBlock";
import { Row } from "react-bootstrap";

export default function InputRow({ id, rowData, inputHandler }) {
  return (
    <Row>
      {rowData.map((data, _) => (
        <InputBlock key={_} data={data} inputHandler={inputHandler} />
      ))}
    </Row>
  );
}
