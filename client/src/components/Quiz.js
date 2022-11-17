import React, { useState } from "react";
import styled from 'styled-components';

const url = require("../images/sky.jpg");


const Box = styled.div`
margin: 45px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 20px;
background-image: url(${url});
color: white;
min-height: 80vh;
`
const UL = styled.ul`
list-style:none
`
const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: row;
border: 1px solid yellow;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: row;
`

function Quiz({quizData}) {
	

  // result state
  const [showResults, setShowResults] = useState(false);//init as false ..show a question instead
  //question state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //score state
  const [score, setScore] = useState(0);

  //mock data (questions as arra of)
  if (!quizData) {return "loading..."} 
  const questions = quizData

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
          <h1>Final Score</h1>
          <h2>
            {score} out of {questions.length} correct  (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartQuizz()}>RETAKE QUIZ</button>
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
                <ButtonsContainer>
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  <Button>{option.text}</Button>
                </li>
                </ButtonsContainer>
              );
            })}
          </UL>
        </div>
      )}
    </Box>
  );
}

export default Quiz;
