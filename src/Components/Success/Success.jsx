import React, { useEffect, useState } from "react";
import "./Success.css";

function Success() {
  const [userMark, setUserMark] = useState("");
  const [length, setLength] = useState("");
  useEffect(() => {
    let mark = localStorage.getItem("mark");
    setUserMark(mark);
    let data = localStorage.getItem("questions");
    data = JSON.parse(data);
    setLength(data.length);
  }, []);

  return (
    <div className="succes-mess-cont mt-5 me-auto ms-auto">
      <h3>
        Your mark is {userMark} out of {length}
      </h3>{" "}
    </div>
  );
}

export default Success;
