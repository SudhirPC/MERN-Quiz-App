import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.singleQuiz);
  const [isLoading, setLoading] = useState(true);
  const questionArr = singleQuiz[0]?.questionArray;
  console.log(questionArr);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <div>...loading</div> : <Quiz questionArr={questionArr} />;
};