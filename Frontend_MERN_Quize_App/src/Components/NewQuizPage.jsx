import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";
import { Questions } from "./Questions.jsx";
export const NewQuizPage = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const handleAnswer = (index, e, el) => {
    // console.log("e[index]",e[index])
    if (el.answer[0][index] === el.correctAnswer) {
      console.log("right answer");
      setCount(count + 1);
    }
    console.log("option click");
  };

  // ------taking path frommwindow object and compairing with the backend data

  const pathname = window.location.pathname
    .split("")
    .splice(1, window.location.pathname.length)
    .join("");

  const filtertopicwise = data.filter((el) => {
    return pathname === el.title;
  });

  console.log(pathname);
  const newfilterquestions = filtertopicwise[0]?.questions;
  console.log("filtertopicwise", newfilterquestions);

  // console.log("newfilter",filtertopicwise[0])
  const dispatch = useDispatch();

  // const handleAnswer = (i, index, e, index1) => {
  //   if (e[index] === data[index1].correctAnswer) {
  //     // console.log("right answer")
  //     setCount(count + 1);
  //   }
  //   console.log("option click");
  // };
  const fetchQuizData = () => {
    dispatch(fetchQuizDataFrombackend());
  };

  useEffect(() => {
    fetchQuizData();
    // fetchtopicwisedata()
  }, []);
  // console.log("data",);

  return (
    <div className="">
      <h1>count:{count}</h1>
      <div>
        {newfilterquestions?.map((el, index) => {
          return (
            <div>
              <div className="flex  w-11/12  pl-1 pt-2 pb-2 mt-2   mr-4">
                <div className="border-red-700 w-10/12 border-grey-200 border-2 pl-1 ml-24 ">
                  <div className="flex">
                    <p className="text-xl font-normal  pl-2">
                      Question {index + 1}){" "}
                    </p>
                    <p className="text-xl font-normal  pl-2">
                      {el.que}
                    </p>
                  </div>
                  {el?.answer[0]?.map((e, index) => {
                    // console.log("index",index)
                    return (
                      <div className="flex ml-24">
                        <p className="mr-2">{index + 1})</p>
                        <div
                          className="cursor-pointer hoverOption"
                          onClick={() => handleAnswer(index, e, el)}
                        >
                          <li className="text-xl li-option-tag">{e}</li>
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

{
  /* <h4>count:{count}</h4> */
}
{
  /* {filtertopicwise.map((e,index)=>{
            // console.log("e",e)
            return(
             <div>
               {e.questions.map((el,index1)=>{
                // console.log("el",el)
              return(
                <div className="ml-28 pl-6 w-10/12 mb-8  border-red-900 border-2" key={e.id}>
                  <div className="flex border border-grey-200 pl-1 pt-2 pb-2 mt-2  mr-4">
                    <div className="w-32">
                      <h1>Question {index1 + 1})</h1>
                    </div>
                  <div className="w-11/12 -ml-8 ">
                  <h1>{el.que}</h1>
                  </div>
                  </div>
                 </div>
              )
              })}
             </div>
            )
            
        })}   */
}

{
  /* {newfilterquestions.map((el,index1)=>{
          console.log("el",el)

          return(
            <div>


            </div>
          )
        })} */
}
