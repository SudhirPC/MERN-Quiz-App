import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Resultshow = () => {
    let [count,setCount]=useState(0);
    let [feedback,setFeedback]=useState("");
    const UserName = useSelector((state) => state.mernQuize.userName)
    const resultUser = useSelector((state) => state.mernQuize.result)
    console.log("resultshowUser",resultUser)

    let originalResult = [];
    const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;


   

   const filterAtualAnswer=(el)=>{
    el.map((e=>{

        originalResult.push(e.correctAnswer)
    }))
   }
    filterAtualAnswer(questionArr)
  console.log("resultshow",originalResult)

  for(let i=0; i<originalResult.length; i++){
    for(let j=0; j<resultUser.length;j++){
        if(resultUser[j]==originalResult[i]){
            count++;
        }
    }
  }

 const calcPercent=()=>{
    const percentage = Math.round((count/resultUser.length)*100)
    if(percentage>90){
      setFeedback(`Congratulations! You cleared the Test! ${UserName}`)
    }else if(percentage>50 && percentage<90){
  
      setFeedback(`Congratulations! You cleared the Test! and Keep Practicing ${UserName}`)
    }else{
      setFeedback(`Sorry!, You are failed to complete the Test! You need to Work Hard! and Keep Practicing  ${UserName}`)
    }
    
    console.log("percent",percentage);
 }
 useEffect(() => {
    calcPercent()
 },)
  return (
    <div>
      <div>
        <img src="./resultAnalysis.gif" alt="resultAnalysis" />
      </div>
        <div>
        <h1>Total Marks : {count}</h1>
        <h1>{feedback}</h1>
        </div>

    </div>
  )
}
