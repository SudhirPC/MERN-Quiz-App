import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const navigate = useNavigate();
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://mern-quiz-server-sudhir.onrender.com/register", user)
        .then((res) => {
          toast("Successfully Registered", {
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          toast("Invalid Input", {
            type: "error",
          });
        });
    } else {
      toast("Invalid Input", {
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex w-4/5 registermain justify-around m-auto mt-10">
      <div className="register w-1/2 h-96 ml-24">
        <p className="text-2xl font-semibold">Register</p>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <button
          className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl "
          onClick={register}
        >
          Register
        </button>
        <ToastContainer />
        <div>OR</div>
        <Link to="/login">
          {" "}
          <div className="p-2 pl-36 pr-28 clicablediv bg-blue-500 h-10 rounded-md text-white  text-xl ">
            Login
          </div>{" "}
        </Link>
      </div>
      <button className="mb-8 w-1/2 ml-48 ">
        <img src="./register.gif" alt="registergif" />
      </button>
    </div>
  );
};
