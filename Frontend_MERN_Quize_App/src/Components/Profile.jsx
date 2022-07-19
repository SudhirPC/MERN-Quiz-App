import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";

export const Profile = () => {
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
    const newfilterquestions = filtertopicwise[0];
    console.log("filtertopicwise", newfilterquestions.questions);
  
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
    <div>
        <h4>count:{count}</h4>
        <div>
          {newfilterquestions.questions.map((el,index)=>{
            return(
              <div>
                <h4>{el.que}</h4>
              </div>
            )
          })}
        </div>
    </div>
  )
}
