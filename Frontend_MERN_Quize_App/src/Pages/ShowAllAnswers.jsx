import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ShowAllAnswers = () => {
  const resultUser = useSelector((state) => state.mernQuize.result);
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  return (
    <div>
      <div className="flex w-11/12 ml-16 mt-12  mb-1">
        <div className=" w-6/12 ">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              QUESTIONS
            </h1>
          </div>

          {questionArr?.map((e, index) => {
            return (
              <div className="h-16 mt-4 border-2 pl-4 ">
                <p>
                  {index + 1}) {e.questions}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              USER ANSWER
            </h1>
          </div>
          {resultUser?.map((e) => {
            return (
              <div className="h-16 mt-4 border-2 text-center red">
                <p>{e}</p>
              </div>
            );
          })}
        </div>
        <div className="w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-red-600">
              CORRECT ANSWER
            </h1>
          </div>
          {questionArr?.map((e) => {
            return (
              <div className="h-16 mt-4 text-center border-2 red">
                <p>{e.correctAnswer}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-36  border-2 p-1 pl-2 text-center  pr-2 bg-teal-400  finalresult ">
        <Link to="/result">
          <button className="text-xl  font-bold">Final Marks</button>
        </Link>
      </div>
    </div>
  );
};
