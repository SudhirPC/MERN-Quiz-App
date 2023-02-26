import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Resultshow = () => {
  let [count, setCount] = useState(0);
  let [feedback, setFeedback] = useState("");
  const UserName = useSelector((state) => state.mernQuize.userName);
  const resultUser = useSelector((state) => state.mernQuize.result);

  let originalResult = [];
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  const filterAtualAnswer = (el) => {
    el.map((e) => {
      originalResult.push(e.correctAnswer);
    });
  };
  filterAtualAnswer(questionArr);

  for (let i = 0; i < originalResult.length; i++) {
    for (let j = 0; j < resultUser.length; j++) {
      if (resultUser[j] == originalResult[i]) {
        count++;
      }
    }
  }

  const calcPercent = () => {
    const percentage = Math.round((count / resultUser.length) * 100);
    if (percentage > 90) {
      setFeedback(`Congratulations! You cleared the Test! ${UserName}`);
    } else if (percentage > 50 && percentage < 90) {
      setFeedback(
        `Congratulations! You cleared the Test! and Keep Practicing ${UserName}`
      );
    } else {
      setFeedback(
        `Sorry!, You are failed to complete the Test! You need to Work Hard! and Keep Practicing  ${UserName}`
      );
    }

  };
  useEffect(() => {
    calcPercent();
  });
  return (
    <div className=" w-11/12 shadow-2xl ml-16  mt-24">
      <h1 className="ml-72 pl-64 mt-8 text-3xl text-sky-700">
        Result Analysis
      </h1>
      <div className="flex -mt-24">
        <div className="w-2/5 ml-4">
          <img src="./resultAnalysis.gif" alt="resultAnalysis" />
        </div>
        <div className="w-2/5  mt-24 p-8">
          <h1 className="text-2xl text-red-600">{feedback}</h1>
          <strong className="text-xl italic text-teal-600">
            Total Marks : {count}/{questionArr.length}
          </strong>
        </div>
      </div>

      <div className=" absolute  bg-blue-300 rounded-2xl right-24 top-28 border-2 mb-8 p-2 pl-4  pr-4 ">
        <Link to="/">
          <button className="text-xl font-bold ">Attempt More Quiz</button>
        </Link>
      </div>
    </div>
  );
};
