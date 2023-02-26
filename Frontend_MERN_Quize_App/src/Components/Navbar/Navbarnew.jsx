import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logout `, {
        type: "success",
      });
    }
    if (adminName == "Sudhir P Chavhan") {
      toast(`Sudhir P Chavhan Successfully Logout `, {
        type: "success",
      });
      dispatch(Logouthandleraction());
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };
  return (
    <div className="w-11/12 h-24 m-auto flex bg-slate-50 mb-8 ">
      <Link to="/" className="w-4/12 flex ">
        <img
          className="rounded-md"
          src="data:image/png;base64,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"
          alt=""
        />
        <img src="./questionfront.gif" alt="" className="w-3/5 " />
      </Link>

      <div className="w-2/5 ml-14 ">
        <img className="w-96 h-24" src="./MERN2.png" alt="" />
        {/* <div className="flex h-10 py-2 mt-1 bg-gray-200">
          <div className="w-3/4 ">
            <input
              className="w-3/4 pl-8 bg-gray-200 focus:outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
          <div className="py-1 ml-12 px-2">
            <svg
              className="w-5 h-5  text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>

      <div className="w-3/12 flex justify-around py-4 mt-2">
        {" "}
        <div className="flex">
          <div className=" pt-2">
            {userName !== null || adminName !== null ? (
              <div className="flex ">
                <div
                  className="font-medium cursor-pointer text-xl"
                  onClick={profilenavigate}
                >
                  PROFILE
                </div>{" "}
                <div
                  onClick={() => {
                    logouthandler();
                  }}
                  className="ml-4 font-medium cursor-pointer text-xl"
                >
                  LOGOUT
                </div>
              </div>
            ) : (
              <Link to="/register" className="font-medium mt-16 ml-24 text-2xl">
                SIGN IN
              </Link>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 mt-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
