import React from "react";
import "./Quiz.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getSingleQuiz,
//   postQuizResult,
//   postUserResult,
// } from "../../Redux/Action/action";

export const Quiz = ( props ) => {
  console.log("Quiz.js", props.questionArr)
  const questionArr=props.questionArr
  const data = useSelector((state) => state.mernQuize.QuizData);
  console.log("datanew",data)
  const user = useSelector((state) => state.user);
  const userID = user._id;
  const quizID = data[0]._id;
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);
  const [ans, setAns] = useState([]);
  const [btnshow, setBtnshow] = useState(false);
  console.log(ans);
  const [disable, setDisable] = useState(null);
  const handleQue = (index) => {
    setDisable(index);
  };

  return (
    <div className=" h-96 pt-5 bg-cyan-900">
      <div className="w-full text-center">
        <div className="flex justify-between align-middle">
          <div className="w-16  h-16">
            <img src="./mark.gif" className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-3xl m-2 text-sky-400/25">
              {questionArr[num]?.questions}
            </h1>
          </div>
          <div className=" font-serif text-slate-900">
            {num + "/" + (questionArr.length - 1)}
          </div>
        </div>
        <ol className="" disabled={disable}>
          {questionArr[num]?.options?.map((answer, index) => (
            <li
              key={answer._id}
              className={
                index == disable && disable != null
                  ? "show border border-gray-300 text-center m-2 p-2"
                  : `notshow border border-gray-300 text-center m-2 p-2`
              }
              onClick={(e) => {
                setAns([...ans, answer.option]);
             
                handleQue(index);
              }}
            >
              {answer.option}
            </li>
          ))}
        </ol>
        <div className="mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
            onClick={() => {
              setNum(num + 1);
              setDisable(null);
            }}
          >
            Skip
          </button>
          {btnshow ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
              onClick={() => {
                // dispatch(postUserResult(ans));
                const obj = {
                  quizId: quizID,
                  userId: userID,
                  quizResult: ans,
                };
                // dispatch(postQuizResult(obj));
              }}
            >
              Result
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
                if (questionArr.length - 2 == num) {
                  setBtnshow(true);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};