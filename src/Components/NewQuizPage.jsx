import React, { useEffect, useState } from "react";
import axios from "axios"
export const NewQuizPage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);


  const handleAnswer=(i,index,e,index1)=>{
    if(e[index]===data[index1].correctAnswer){
        // console.log("right answer")
        setCount(count+1)
    }
    console.log("option click")
    // console.log(index1)
    // console.log("e",e[index])
 }
  const fetchQuizData = () => {
    axios
      .get("http://localhost:8080/javaScriptData")
      .then((res) =>  setData(res.data.questions),
      
      )
      .catch((err) => console.log(err));
  };
 useEffect(() =>{
    fetchQuizData()
 },[])
  console.log(data);
  return (
    <div className=" justify-center items-center">
        <div> Count:{count}</div>
        {data.map((e,index1)=>{
            
            return(
               <div key={e.id}>
                <div className="flex ml-96">
                <h3>{index1 + 1}) </h3>
                <h1 className="ml-2">{e.que}</h1>
                </div>
                <div>
                <ol>
                  {e.answer.map((el, index, e) => {
                    return (
                      <div key={el.id}>
                        <li onClick={() => handleAnswer(el, index, e, index1)}>
                          {el}
                        </li>
                      </div>
                    );
                  })}
                </ol>
             
              </div>
               </div>
            )
        })}
     
    </div>
  );
};




 {/* <div> Count:{count}</div>
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
                <div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div></div> */}