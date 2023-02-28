import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";
export const NewQuizPage = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const [clickoption, setClickOption] = useState(false);

  const handleAnswer = (index, e, el) => {
    if (clickoption == false) {
      if (el.answer[0][index] === el.correctAnswer) {
        setCount(count + 1);
      }
    }
  };

  // ------taking path from window object and compairing with the backend data

  const pathname = window.location.pathname
    .split("")
    .splice(1, window.location.pathname.length)
    .join("");

  const filtertopicwise = data.filter((el) => {
    return pathname === el.title;
  });

  const newfilterquestions = filtertopicwise[0]?.questions;
  const dispatch = useDispatch();

  const fetchQuizData = () => {
    dispatch(fetchQuizDataFrombackend());
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const handlecount = (index) => {
    setClickOption(true);
  };

  return (
    <div className="">
      <div className="border-teal-500 absolute  right-24 top-24 border-2 mb-8 p-1 pl-2  pr-2 ">
        <h1 className="text-xl font-bold">Count:{count}</h1>
      </div>
      <div className="mt-20">
        {newfilterquestions?.map((el, index) => {
          return (
            <div>
              <div className="flex  w-12/12  pl-1 pt-2 pb-2 mt-2   mr-4">
                <div className="border-red-700 w-11/12 border-grey-200 border-2 pl-1 ml-24 ">
                  <div className="flex w-11/12">
                    <div className="w-40">
                      <p className="text-xl font-normal  pl-1">
                        Question {index + 1})
                      </p>
                    </div>
                    <div className="w-10/12 -ml-10">
                      <p className="text-xl font-normal  ">{el.que}</p>
                    </div>
                  </div>
                  {el?.answer[0]?.map((e, index) => {
                    return (
                      <div className="flex ml-32">
                        <p className="mr-2">{index + 1})</p>
                        <div
                          className="cursor-pointer hoverOption"
                          onClick={() => handleAnswer(index, e, el)}
                        >
                          <li className="text-xl li-option-tag">{e}</li>
                          {/* onClick={()=>{handlecount(index)}} */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
