import React, { useState } from "react";
import styled from 'styled-components';

const Box = styled.div`
margin: 45px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 20px;

min-height: 80vh;	
`
const UL = styled.ul`
list-style:none
`


function Quiz() {
	

  // result state
  const [showResults, setShowResults] = useState(false);//init as false ..show a question instead
  //question state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //score state
  const [score, setScore] = useState(0);

  //mock data (questions as arra of)
  const questions = [
    {
      text: "Closest planet to the sun?",
      options: [
        { id: 0, text: "Mars", isCorrect: false },
        { id: 1, text: "Mercury", isCorrect: true }
    
      ],
    },
    {
      text: "Failed star?",
      options: [
        { id: 0, text: "jupiter", isCorrect: true },
        { id: 1, text: "saturn", isCorrect: false },
      ]
    }
  ];

  const optionClicked = (isCorrect) => {
    // increment score by 1
    if (isCorrect) {
      setScore(score + 1);
    }
	//check end of arr
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  //restart Quiz
  const restartQuizz = () => {
	//re-set states
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <Box>
		<h1>Solar System Quiz</h1>
      <h2>Score: {score}</h2>

      {showResults ? (
       
        <div>
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartQuizz()}>restart quiz</button>
        </div>
      ) : (
       
        <div>
          {/* current question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3>{questions[currentQuestion].text}</h3>

          {/*  answers  --  */}
		{/* map questions arr , transform obj into list of li items */}
          <UL>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  <button>{option.text}</button>
                </li>
              );
            })}
          </UL>
        </div>
      )}
    </Box>
  );
}

export default Quiz;
