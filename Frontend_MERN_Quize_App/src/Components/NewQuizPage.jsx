import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";
import { Questions } from "./Questions.jsx";
export const NewQuizPage = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);

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

  const handleAnswer = (i, index, e, index1) => {
    if (e[index] === data[index1].correctAnswer) {
      // console.log("right answer")
      setCount(count + 1);
    }
    console.log("option click");
  };
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
      {/* <h4>count:{count}</h4> */}
      {/* {filtertopicwise.map((e,index)=>{
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
            
        })}   */}

      {/* {newfilterquestions.map((el,index1)=>{
          console.log("el",el)

          return(
            <div>


            </div>
          )
        })} */}

        <div>
          {newfilterquestions?.map((el,index)=>{
            return(
            <div>
              <Questions prop={el}/>
            </div>
            )
          })}
        </div>
    </div>
  );
};
