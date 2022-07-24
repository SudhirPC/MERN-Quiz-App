import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginAdminId, loginAdminName, loginUser, loginUserName } from "../../Redux/action.js";

export const Login = ({ setLoginUser }) => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:3755/login", user)
      .then((res) => {
        console.log(res.data)
        if(res.data.user.email=="sudhirchavhan100@gmail.com"){
          dispatch(loginAdminId(res.data.user._id))
          dispatch(loginAdminName(res.data.user.name))
        }else{
          dispatch(loginUser(res.data.user._id))
          dispatch(loginUserName(res.data.user.name))
        }
    
        if(res.data.message=="login succesfully"){
            alert("Login succesfully")
              navigate('/')   
        }


      })
      .catch((err) => {
        alert("Invalid Credientials");
      });
  };

  return (
    <div className=" flex w-4/5 justify-around m-auto mt-16">


      <div className="login mb-28 w-1/2 ml-48 ">
      {console.log(user)}
      <h1 className="text-2xl font-semibold">Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <Link to="/">
        {" "}
        <button
          onClick={() => {
            login();
          }}
          className="pl-8 pr-8 bg-blue-500 mt-6 h-10 rounded-md text-white pt-2 text-xl"
        >
          Login
        </button>
      </Link>
      <div>OR</div>
      <Link to="/register">
        {" "}
        <button className="pl-8 pr-8 mb-8 bg-blue-500  h-10 rounded-md text-white pt-2 text-xl">
          Register
        </button>{" "}
      </Link>
      </div>
      <div className="w-1/2 ml-24">
    <img className="h-96 w-96" src="./login.gif" alt="logingif" />
</div>
    </div>
  );
};
