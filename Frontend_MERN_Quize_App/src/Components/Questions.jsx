import React, { useState } from 'react'

export const Questions = (prop) => {
console.log(prop,"prop")
const [count, setCount] = useState(0);
const handleAnswer = (index, e,prop) => {
    // console.log("e[index]",e[index])
    if (prop.prop.answer[0][index] === prop.prop.correctAnswer) {
      console.log("right answer")
      setCount(count + 1);
    }
    console.log("option click");
  };
  return (
    <div className="flex border border-grey-200 pl-1 pt-2 pb-2 mt-2  mr-4">
        <div className="ml-">
                <p className="text-2xl font-normal">Question{prop.prop.que}</p>
                {prop.prop?.answer[0]?.map((e,index)=>{
                    console.log("index",index)
                  return(
                    <div className="flex">
                      <p className="mr-2">{index+1})</p>  
                      <div className="cursor-pointer hoverOption" onClick={() => handleAnswer(index,e,prop)}>
                      <li className="text-xl">{e}</li>
                      </div>
                  </div>
                  )
                })}
        </div>
        </div>
  )
}

// {
  /* <div className="flex border border-grey-200 pl-1 pt-2 pb-2 mt-2  mr-4">
<div className="w-32">
<h3>Question {index1 + 1}) </h3>
</div>
<div className="w-11/12 -ml-8 ">
<h1 >{e.title}</h1>
<h1>{e.que}</h1>
 {e.answer.map((el, index, e)=>{
return (
  <div  className="ml-32 mb-6 mt-1" key={el.id}>
    <li type="a" className="cursor-pointer hoverOption" onClick={() => handleAnswer(el, index, e, index1)}>
      {el}
    </li>
  </div>
);
}) 
}  
</div>
</div>
<div>
{/* <ol>
  {e.answer.map((el, index, e) => {
    return (
      <div  className="ml-32 mb-6 mt-1" key={el.id}>
        <li type="a" className="cursor-pointer hoverOption" onClick={() => handleAnswer(el, index, e, index1)}>
          {el}
        </li>
      </div>
    );
  })}
</ol>   */
// }
// </div>
//  */}

// {
  /* <div> Count:{count}</div>
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

      <div></div> */
// }
