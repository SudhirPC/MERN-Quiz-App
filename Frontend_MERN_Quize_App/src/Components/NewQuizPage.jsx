import React, { useEffect, useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";
export const NewQuizPage = () => {
  const data= useSelector((state) => state.mernQuize.QuizData)
  
  const [count, setCount] = useState(0);
  const pathname=window.location.pathname.split("").splice(1,(window.location.pathname).length).join("")

 const filtertopicwise= data.filter((el)=>{
  return pathname===el.title
  })

  console.log("filtertopicwise",filtertopicwise)
const dispatch = useDispatch()


  const handleAnswer=(i,index,e,index1)=>{
    if(e[index]===data[index1].correctAnswer){
        // console.log("right answer")
        setCount(count+1)
        
    }
    console.log("option click")
    // console.log(index1)
    // console.log("e",e[index])
 }


  const fetchQuizData=()=>{

    dispatch(fetchQuizDataFrombackend())
  }

 useEffect(() =>{
    fetchQuizData()
 },[])
  console.log("data",data);



console.log(pathname)
  return (
    <div className="">
        <div className="justify-end flex mr-28 mb-4 mt-4 "> <div className="border-red-900 p-2 pr-4 border-2 w-20">Count:{count}</div></div>
        {/* {data.map((e,index1)=>{
            return(
              <div className="ml-28 pl-6 w-10/12 mb-8  border-red-900 border-2" key={e.id}>
                <div className="flex border border-grey-200 pl-1 pt-2 pb-2 mt-2  mr-4">
                <div className="w-32">
                <h3>Question {index1 + 1}) </h3>
                </div>
                <div className="w-11/12 -ml-8 ">
                <h1 >{e.que}</h1>
                </div>
                </div>
                <div>
                <ol>
                  {e.answer.map((el, index, e) => {
                    return (
                      <div  className="ml-32 mb-6 mt-1" key={el.id}>
                        <li type="a" className="cursor-pointer hoverOption" onClick={() => handleAnswer(el, index, e, index1)}>
                          {el}
                        </li>
                      </div>
                    );
                  })}
                </ol>
              </div>
               </div>
            )
        })} */}
     
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