import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { update_status } from "../../Redux/status/statusSilce";
function UserForm() {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("questions");
    data = JSON.parse(data);
    setQuestions(data);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let count = 0;
    let marks = 0;
    for (let key in data) {
      if (questions[count].answer === data[key]) {
        marks++;
      }
      count++;
    }
    localStorage.setItem("mark", marks);
    dispatch(
      update_status({
        status: "Success",
      })
    );
  };
  return (
    <div>
      {questions ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {questions.map((question, i) => {
            let answer = i + "answer";
            return (
              <Card className="shadow mt-3 " key={i}>
                <Card.Body>
                  <h6>
                    <strong>question {i + 1}</strong>
                  </h6>
                  <p>{question.question}</p>
                  <p className="answer-p">
                    <strong>Choose correct answer</strong>{" "}
                  </p>
                  <label htmlFor="field-wind">
                    <input
                      {...register(answer, { required: "Required" })}
                      type="radio"
                      name={answer}
                      value="a"
                      id="field-wind"
                    />
                    {question.a}
                  </label>
                  <br />
                  <label htmlFor="field-sun">
                    <input
                      {...register(answer)}
                      type="radio"
                      name={answer}
                      value="b"
                      id="field-sun"
                    />
                    {question.b}
                  </label>
                  <br />
                  <label htmlFor="field-">
                    <input
                      {...register(answer)}
                      type="radio"
                      name={answer}
                      value="c"
                      id="field-"
                    />
                    {question.c}
                  </label>
                  <br />
                  <label htmlFor="field-su">
                    <input
                      {...register(answer)}
                      type="radio"
                      name={answer}
                      value="d"
                      id="field-su"
                    />
                    {question.d}
                  </label>
                  <br />
                </Card.Body>
              </Card>
            );
          })}
          {questions && (
            <div className="submit-button-container me-auto ms-auto mt-5 mb-5">
              <input className="submit-button p-2" type="submit" />
            </div>
          )}
        </form>
      ) : (
        <div>No questions available at the moment</div>
      )}
    </div>
  );
}

export default UserForm;
