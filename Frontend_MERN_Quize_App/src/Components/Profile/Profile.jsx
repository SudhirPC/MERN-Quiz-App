import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../../Redux/action.js";

export const Profile = () => {
    const data = useSelector((state) => state.mernQuize.QuizData);
    const [count, setCount] = useState(0);
    const userName = useSelector((state) => state.mernQuize.userName);

    return(
      <div className="margin-auto flex w-4/5 mb-56 ml-64 mt-16">
        <img src="./profile.gif" alt="prfile" className="w-1/2 h-64" />
        <h1 className="ml-8 w-1/2 mt-32 text-2xl text-sky-600  "> Welcome! {userName}👋</h1>
        
    </div>
    )     
}
