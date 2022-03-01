import React from "react";
import { useForm } from "react-hook-form";
import { update_questions } from "../../Redux/questions/questionsSlice";
import { useDispatch } from "react-redux";
function AdminForm() {
  const dispatch = useDispatch()
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let formDatas = [];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
   
    localStorage.setItem("questions",JSON.stringify(formDatas))
  };
  return (
    <div className="mt-5" >
      <form onSubmit={handleSubmit(onSubmit)}>
{numbers.map((elements,i)=>{
  let answer = i+"answer"
  return(
    <div key={i}>
    <p>Question {i+1}</p>
    <input {...register(i+"qustion")} />
    <p>options</p>
    <input {...register(i+"A")} />
    <input {...register(i+"B")} />
    <input {...register(i+"C")} />
    <input {...register(i+"D")} />
    <br />
    <label htmlFor="field-wind">
      <input
        {...register(answer)}
        type="radio"
        name={answer}
        value="A"
        id="field-wind"
      />
      A
    </label>
    <label htmlFor="field-sun">
      <input
        {...register(answer)}
        type="radio"
        name={answer}
        value="B"
        id="field-sun"
      />
      B
    </label>
    <label htmlFor="field-">
      <input
        {...register(answer)}
        type="radio"
        name={answer}
        value="C"
        id="field-"
      />
      C
    </label>
    <label htmlFor="field-su">
      <input
        {...register(answer)}
        type="radio"
        name={answer}
        value="D"
        id="field-su"
      />
      D
    </label>
    <br />
    </div>
  )
})}

     

        <input type="submit" />
      </form>
    </div>
  );
}

export default AdminForm;
