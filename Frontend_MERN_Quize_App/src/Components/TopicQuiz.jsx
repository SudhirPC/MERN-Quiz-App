import React from "react";
import { Link } from "react-router-dom";

export const TopicQuiz = () => {

  return (
    <div className="mt-10 mb-10">
      <div className="justify-self-center ml-96">
      <h1 className="font-bold text-2xl ml-36">Prepare By Topics</h1>
      </div>
      <div className="grid grid-cols-2 w-11/12 p-10 m-auto gap-8 shadow-2xl">
      <Link to="/HTML">  <div   className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5 h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">HTML</h1>
          </div>
          <img
            className="w-2/5  rounded-2xl"
            src="/html-5.gif"
            alt=""
          />
        </div></Link>
        <Link to="/CSS">    <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5 h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">CSS</h1>
          </div>
          <img
            className="w-2/5  rounded-2xl"
            src="./css3.gif"
            alt=""
          />
        </div></Link>
        <Link to="/Javascript">  <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5  h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">JavaScript</h1>
          </div>
          <img
            className="w-2/5 rounded-2xl "
            src="./javascript.gif"
            alt=""
          />
        </div></Link>
        <Link to="/React">   <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5 h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">React</h1>
          </div>
          <img
            className="w-2/5 rounded-2xl "
            src="./react.gif"
            alt=""
          />
        </div></Link>
        <Link to="/Redux">   <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5 h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">Redux</h1>
          </div>
          <img
            className="w-2/5 rounded-2xl"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div></Link>
        <Link to="/Mongodb"> <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
          <div className="w-3/5 h-full bg-rgb(27,169,76)">
            <h1 className="pt-12 pl-16 topicdivh1">MongoDb</h1>
          </div>
          <img
            className="w-2/5 rounded-2xl h-full"
            src="./mongo.gif"
            alt=""
          />
        </div></Link>
      </div>
    </div>
  );
};
