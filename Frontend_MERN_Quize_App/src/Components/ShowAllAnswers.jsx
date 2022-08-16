import React from "react";
import { useSelector } from "react-redux";

export const ShowAllAnswers = () => {
  const resultUser = useSelector((state) => state.mernQuize.result);
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;
  console.log("resultUser",resultUser)
  return (
    <div className="flex w-11/12 ml-24">
      <div className=" w-3/6">
        <h1>QUESTIONS</h1>
        {questionArr?.map((e,index)=>{
          return(
            <div className="h-16 mt-4 border-2 ">
              <p>{index+1}) {e.questions}</p>
            </div>
          )
        })}
      </div>
      <div className=" w-2/6">
        <h1>USER ANSWER</h1>
        {resultUser?.map((e)=>{
          return(
            <div className="h-16 mt-4 border-2 red">
              <p>{e}</p>
            </div>
          )
        })}
      </div>
      <div className=" w-1/6">
        <h1>CORRECT ANSWER</h1>
        {questionArr?.map((e)=>{
          return(
            <div className="h-16 mt-4 border-2 red">
              <p>{e.correctAnswer}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};
