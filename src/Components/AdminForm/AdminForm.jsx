import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AdminForm.css";
import { useDispatch } from "react-redux";
import { Card, Col, Form, Row } from "react-bootstrap";
function AdminForm() {
  const dispatch = useDispatch();
  const [questionNumbers, setQuestionNumbers] = useState("");
  const [number, setNumber] = useState(null);
  const [numRows, setNumRows] = useState(null);
  const [succes, setSucces] = useState(false);
  let indents = [];
  let formDatas = [];
  const numberOfItems = (e) => {
    let { value } = e.target;
    setNumber(value);
  };
  const numberSubmit = (e) => {
    e.preventDefault();
    setNumRows(number);
  };
  for (var i = 1; i <= numRows; i++) {
    indents.push(i);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let object = {};
    let count = 0;
    for (let key in data) {
      console.log(data[key]);
      count++;
      if (count === 1) {
        object.question = data[key];
      } else if (count === 2) {
        object.a = data[key];
      } else if (count === 3) {
        object.b = data[key];
      } else if (count === 4) {
        object.c = data[key];
      } else if (count === 5) {
        object.d = data[key];
      } else {
        object.answer = data[key];
        formDatas.push(object);

        object = {};
        count = 0;
      }
    }

    localStorage.setItem("questions", JSON.stringify(formDatas));
    setSucces(true);
  };
  const addNewQuestions = () => {
    console.log("kk;;;;;");
    setNumRows(null);
    setSucces(false);
  };
  return (
    <div className="mt-5">
      {succes ? (
        <div>
          <h2>Succesfully questions submitted</h2>
          <button onClick={addNewQuestions}>Add new questions</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  onChange={numberOfItems}
                  placeholder="Enter number of questions"
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={6} xs={6}>
              <button
                onClick={numberSubmit}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  marginTop: "0px",
                  padding: "2%",
                  width: "35px",
                  border: "1px solid grey",
                }}
              >
                +
              </button>
            </Col>
          </Row>
          {indents.map((elements, i) => {
            let answer = i + "answer";
            return (
              <div key={i}>
                <Card className="shadow mt-3 ">
                  <Card.Body>
                    <p>Question {i + 1}</p>
                    <textarea
                      {...register(i + "qustion", { required: "Required" })}
                      cols="50"
                    />
                    <p>options</p>
                    <input
                      {...register(i + "A", { required: "Required" })}
                      placeholder="option A"
                      className="me-2"
                    />
                    <input
                      {...register(i + "B", { required: "Required" })}
                      placeholder="option B"
                      className="me-2"
                    />
                    <input
                      {...register(i + "C", { required: "Required" })}
                      placeholder="option C"
                      className="me-2"
                    />
                    <input
                      {...register(i + "D", { required: "Required" })}
                      placeholder="option D"
                      className="me-2"
                    />
                    <br />
                    <p className="answer-p">Select correct answer</p>
                    <label htmlFor="field-wind">
                      <input
                        {...register(answer, { required: "Required" })}
                        type="radio"
                        name={answer}
                        value="a"
                        id="field-wind"
                      />
                      A
                    </label>
                    <label htmlFor="field-sun">
                      <input
                        {...register(answer)}
                        type="radio"
                        name={answer}
                        value="b"
                        id="field-sun"
                      />
                      B
                    </label>
                    <label htmlFor="field-">
                      <input
                        {...register(answer)}
                        type="radio"
                        name={answer}
                        value="c"
                        id="field-"
                      />
                      C
                    </label>
                    <label htmlFor="field-su">
                      <input
                        {...register(answer)}
                        type="radio"
                        name={answer}
                        value="d"
                        id="field-su"
                      />
                      D
                    </label>
                    <br />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          {numRows && (
            <div className="submit-button-container me-auto ms-auto mt-5 mb-5">
              <input className="submit-button p-2" type="submit" />
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default AdminForm;
