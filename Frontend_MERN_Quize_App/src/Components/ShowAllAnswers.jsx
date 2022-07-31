import React from 'react'

export const ShowAllAnswers = () => {
    const resultUser = useSelector((state) => state.mernQuize.result)
    const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
    const questionArr = singleQuiz[0]?.questionArray;
  return (
    <div>
        <div className="flex">
            <div>
                Here work on the show all the questions and its answer
            </div>
            <div></div>
        </div>
    </div>
  )
}
