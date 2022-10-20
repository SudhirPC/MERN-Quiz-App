import React, { useEffect, useState } from "react";
import axios from "axios";
const quizeData = {
  questions: [
    {
      que: "ReactJS is developed by _____?",
      answer: ["Google Engineers", "Facebook Engineers"],
      correctAnswer: "Facebook Engineers",
    },
    {
      que: "ReactJS is an MVC based framework?",
      answer: ["True", "False"],
      correctAnswer: "False",
    },
  ],
};
export const QuizePage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleAnswer = (i, index, e, index1) => {
    if (e[index] == quizeData.questions[index1].correctAnswer) {
      // console.log("right answer")
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div> Count:{count}</div>
      <div>
        {quizeData.questions.map((e, index1) => {
          return (
            <div id={e.id}>
              <div>
                <h3>{index1 + 1}</h3>
                <h3>{e.que}</h3>
              </div>
              <div>
                <ol>
                  {e.answer.map((el, index, e) => {
                    return (
                      <div id={e.id}>
                        <li onClick={() => handleAnswer(el, index, e, index1)}>
                          {el}
                        </li>
                      </div>
                    );
                  })}
                </ol>
                <div>
                  {/* <button >Submit</button> */}
                  {/* <button>Next</button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

// useEffect(() =>{
//     getquizedata()
// },[])

//   const getquizedata=()=>{
//     axios
//     .get("http://localhost:8080/HTML")
//     .then((res) => {
//       setData(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }
