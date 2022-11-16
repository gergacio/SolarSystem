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
justify-contect: row;
align-items: row;
border: 1px solid black;


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
      text: "What planet is closest to our Sun?",
      options: [
        { id: 0, text: "Mars", isCorrect: false },
        { id: 1, text: "Pluto", isCorrect: false },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Titan", isCorrect: false },
        { id: 4, text: "Mercury", isCorrect: true }
    
      ],
    },
    {
      text: "Which planet is a failed star?",
      options: [
		  { id: 0, text: "Neptune", isCorrect: false },
		  { id: 1, text: "Mercury", isCorrect: false },
		  { id: 2, text: "Jupiter", isCorrect: true },
		  { id: 3, text: "Earth", isCorrect: false },
        { id: 4, text: "Mars", isCorrect: false },
      ]
    },
    {
      text: "Which planet is often referred to as the Red Planet?",
      options: [
		{ id: 0, text: "Uranus", isCorrect: false },
		{ id: 1, text: "Mars", isCorrect: true },
        { id: 2, text: "Saturn", isCorrect: false },
        { id: 3, text: "Neptune", isCorrect: false },
        { id: 4, text: "Earth", isCorrect: false },
      ]
    },
    {
      text: "Which is the coldest planet out of the selection below?",
      options: [
        { id: 0, text: "Earth", isCorrect: false },
        { id: 1, text: "Jupiter", isCorrect: false },
        { id: 2, text: "Mars", isCorrect: false },
        { id: 3, text: "Mercury", isCorrect: false },
        { id: 4, text: "Saturn", isCorrect: true },
      ]
    },
    {
      text: "Which planet has a radius of 25,362km?",
      options: [
        { id: 0, text: "Mars", isCorrect: false },
        { id: 1, text: "Earth", isCorrect: false },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Uranus", isCorrect: true },
        { id: 4, text: "Jupiter", isCorrect: false },
      ]
    },
    {
      text: "It takes sunlight 43 minutes to reach which planet?",
      options: [
        { id: 0, text: "Jupiter", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Neptune", isCorrect: false },
        { id: 3, text: "Uranus", isCorrect: false },
        { id: 4, text: "Saturn", isCorrect: false },
      ]
    },
    {
      text: "Which planets have a ring system similar to Saturn?",
      options: [
        { id: 0, text: "Earth", isCorrect: false },
        { id: 1, text: "Mercury", isCorrect: false },
        { id: 2, text: "Neptune", isCorrect: true },
        { id: 3, text: "Mars", isCorrect: false },
        { id: 4, text: "Uranus", isCorrect: true },
      ]
    },
    {
      text: "Which planet has a 16 hour day?",
      options: [
        { id: 0, text: "Saturn", isCorrect: false },
        { id: 1, text: "Neptune", isCorrect: true },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Mars", isCorrect: false },
        { id: 4, text: "Earth", isCorrect: false },
      ]
    },
    {
      text: "Jupiter has how many moons?",
      options: [
        { id: 0, text: "7", isCorrect: false },
        { id: 1, text: "111", isCorrect: false },
        { id: 2, text: "63", isCorrect: false },
        { id: 3, text: "39", isCorrect: false },
        { id: 4, text: "67", isCorrect: true },
      ]
    },
    {
      text: "How many billions of kilometers is Neptune from the Sun?",
      options: [
        { id: 0, text: "4.4737", isCorrect: false },
        { id: 1, text: "4.4738", isCorrect: true },
        { id: 2, text: "4.4739", isCorrect: false },
        { id: 3, text: "4.4740", isCorrect: false },
        { id: 4, text: "A lot", isCorrect: true },
      ]
    },
    {
      text: "Starbucks has opened 33,833 stores on which planet?",
      options: [
        { id: 0, text: "Pluto", isCorrect: false },
        { id: 1, text: "Earth", isCorrect: true },
        { id: 2, text: "Saturn", isCorrect: false },
        { id: 3, text: "Mars", isCorrect: false },
        { id: 4, text: "Venus", isCorrect: false },
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
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  <Button>{option.text}</Button>
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
