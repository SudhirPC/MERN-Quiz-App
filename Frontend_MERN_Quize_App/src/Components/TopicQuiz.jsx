import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="mt-10 mb-10 ">
      <div className="justify-self-center ml-96">
        <h1 className="font-bold text-2xl ml-44 pl-12">Prepare By Topics</h1>
      </div>
      <div className="grid grid-cols-2 w-11/12 p-10 m-auto gap-8 shadow-2xl">
        {userId ? (
          <Link to="/quiz/html">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1 ">HTML</h1>
              </div>
              <img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1 ">HTML</h1>
              </div>
              <img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/css">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">CSS</h1>
              </div>
              <img
                className="w-2/5 mr-0  rounded-2xl"
                src="./css3.gif"
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">CSS</h1>
              </div>
              <img
                className="w-2/5 mr-0  rounded-2xl"
                src="./css3.gif"
                alt=""
              />
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/javascript">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5  h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">JavaScript</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl "
                src="./javascript.gif"
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5  h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">JavaScript</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl "
                src="./javascript.gif"
                alt=""
              />
            </div>
          </Link>
        )}

        {userId ? (
          <Link to="/quiz/react">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">React</h1>
              </div>
              <img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">React</h1>
              </div>
              <img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/redux">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">Redux</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">Redux</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/mongodb">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">MongoDb</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1">MongoDb</h1>
              </div>
              <img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />
            </div>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
