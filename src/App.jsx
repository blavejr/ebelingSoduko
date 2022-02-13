import logo from "./logo.svg";
import "./App.scss";
import cx from "classnames";
import InputRow from "./components/InputRow/InputRow";
import { Container, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import { findBlockById, validateEntry, validateEntireBoard } from './helpers/index';

function App() {
  const [data, setData] = useState([
    [
      { val: 5, id: `inputBlock_${1}`, row: 0, col: 0 },
      { val: 2, id: `inputBlock_${2}`, row: 0, col: 1 },
      { val: 8, id: `inputBlock_${3}`, row: 0, col: 2 },
    ],
    [
      { val: 4, id: `inputBlock_${4}`, row: 1, col: 0 },
      { val: 1, id: `inputBlock_${5}`, row: 1, col: 1 },
      { val: 6, id: `inputBlock_${6}`, row: 1, col: 2 },
    ],
    [
      { val: 7, id: `inputBlock_${7}`, row: 2, col: 0 },
      { val: 3, id: `inputBlock_${8}`, row: 2, col: 1 },
      { val: 9, id: `inputBlock_${9}`, row: 2, col: 2 },
    ],
  ]);
  const containerRef = useRef();

  const inputHandler = (e) => {
    let newValue = parseInt(e.target.value);
    if (newValue < 1) newValue = 1;
    if (newValue > 9) newValue = 9;
  
    const dataCopy = JSON.parse(JSON.stringify(data));
    const changingBlock = findBlockById(data, e.target.id);
    changingBlock.val = newValue;
    dataCopy[parseInt(changingBlock.row)][parseInt(changingBlock.col)] =
      changingBlock;
    if (validateEntry(dataCopy, changingBlock) && validateEntireBoard(dataCopy)) {
      document.getElementById("formLabel").innerHTML =
        "Good! you have solved the puzzel";
      document.getElementById("formLabel").style.color = "green";
    } else {
      document.getElementById("formLabel").innerHTML =
        "There is a duplicate in a row or column";
      document.getElementById("formLabel").style.color = "red";
    }
    setData(dataCopy);
  };

  return (
    <Container ref={containerRef} className={cx("mainContainer")}>
      <h1>Soduko!</h1>

      {data.map((rowData, _) => (
        <InputRow key={_} rowData={rowData} inputHandler={inputHandler} />
      ))}
      <Form.Label id="formLabel"></Form.Label>
    </Container>
  );
}

export default App;
