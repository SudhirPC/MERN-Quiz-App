import React, { useEffect, useState } from "react";
import axios from "axios";

export const QuizePage = () => {
  const [data, setData] = useState([]);

useEffect(() =>{
    getquizedata()
},[])

  const getquizedata=()=>{
    axios
    .get("http://localhost:8080/HTML")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
 
console.log(data)
  return (
    <div>
      <h1>{data.quizTitle}</h1>
      <h4>{data.nrOfQuestions}</h4>
      <div>

      </div>
    </div>
  );
};
