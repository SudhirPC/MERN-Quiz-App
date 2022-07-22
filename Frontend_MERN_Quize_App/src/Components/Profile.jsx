import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";

export const Profile = () => {
    const data = useSelector((state) => state.mernQuize.QuizData);
    const [count, setCount] = useState(0);

    return(
      <div>
       
      </div>
    )     
}
