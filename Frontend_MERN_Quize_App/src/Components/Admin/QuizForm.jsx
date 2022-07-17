import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuizObj, quizSuccess } from "../../Redux/action.js";


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
    <div className="w-64 text-slate-50">
      <div className="text-lg text-yellow-300 font-bold font-serif mb-5">
        Add Questions
      </div>
      <form>
        <label
          className="block uppercase tracking-wide  text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Title{" "}
        </label>
        <input
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
      <button
        onClick={handleUpload}
        className=" mt-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Upload
      </button> 
    </div>
  );
};
