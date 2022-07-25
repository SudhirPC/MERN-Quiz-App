import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuizObj, quizSuccess } from "../../Redux/action.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const QuizForm = () => {
  const data = useSelector((state) => state.mernQuize.questions);
  const dispatch = useDispatch();
  console.log("data",data);
  const [quiz, setQuiz] = useState({
    title: "",
    que: "",
    answer: ["", "", "", ""],
    correctAnswer: "",
  });

  const handleQuiz = (event) => {
    event.preventDefault();
    console.log(quiz);
    dispatch(quizSuccess(quiz));
  };
  
  const handleUpload = () => {
    const obj = {
      title: data[0].title,
      questions: data,
    };
    // console.log(obj);

    dispatch(postQuizObj(obj));
  };
  return (
    <div className="w-11/12 flex text-slate-50 ml-18 mb-36 justify-evenly">
      <div className="w-1/2 mt-36 ml-32">
        <img className="h-80 pl-36 mt-8" src="./feedback.gif" alt="feedback" />
      </div>
      <div className="w-1/2 -ml-24 ">
      <div className=" flex text-yellow-500  w-96 font-bold font-serif mb-2 ml-36 mt-14">
        <h1 className="text-2xl mt-10">Add Questions</h1>
        <img src="./add.gif" alt="add icon" className="w-1/2 h-20 mt-4" />
      </div>
      <form className="ml-36 -mt-4">
        <label
          className="block uppercase tracking-wide  text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Title{" "}
        </label>
        <input
          className=" block w-72 bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setQuiz({ ...quiz, title: event.target.value });
          }}
        />
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Question{" "}
        </label>
        <input
          className=" block w-72 bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Question"
          onChange={(event) =>
            setQuiz({ ...quiz, que: event.target.value })
          }
        />
        <label
          className="block uppercase tracking-wide  text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Answers{" "}
        </label>
        <input
          className=" block w-72 bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Options"
          onChange={(event) =>
            setQuiz({ ...quiz, answer: [event.target.value.split(",")] })
          }
        />
        <label
          className="block uppercase tracking-wide  text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          CorrectAnswer{" "}
        </label>
        <input
          className=" block w-72 bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Answer"
          onChange={(event) =>
            setQuiz({ ...quiz, correctAnswer: event.target.value })
          }
        />

        <button
          onClick={handleQuiz}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>
      </form>
      <div className="ml-12 -mt-14">
      <button
        onClick={handleUpload}
        className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  mt-3  ml-72 "
      >
        Upload
      </button>
      </div>
      </div>
     
      <ToastContainer/>
    </div>
  );
};
