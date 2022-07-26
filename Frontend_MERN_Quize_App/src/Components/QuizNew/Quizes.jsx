import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuiz } from "../../Redux/action.js";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const params = useParams()
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const questionArr = singleQuiz[0]?.questionArray;
  console.log("questionArr",questionArr);
  

  useEffect(() => {
    dispatch(getQuiz(params))
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return isLoading ? <div>...loading</div> : <Quiz questionArr={questionArr} />;
};