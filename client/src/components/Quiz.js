import React, { useState } from 'react';

export default function App() {
  //mock data ..
	const questions = [
		{
			questionText: 'Closest planet to the sun?',
			answerOptions: [
				{ answerText: 'Mars', isCorrect: false},//pass it into callback 
				{ answerText: 'Mercury', isCorrect: true }
			
			],
		},
		{
			questionText: 'Failed star?',
			answerOptions: [
				{ answerText: 'jupiter', isCorrect: true },
				{ answerText: 'saturn', isCorrect: false }
			],
		}
	];

  //state questions
	const [currentQuestion, setCurrentQuestion] = useState(0);
  //state score
  const [score, setScore] = useState(0);
  //state show score...init like false...when test finish turn in true..
	const [showScore, setShowScore] = useState(false);
	
  //callback func handle click event
  //pass as argument isCorrect property
	const handleAnswerClick = (isCorrect) => {
    //if answer correct update score with 1
		if (isCorrect) {
			setScore(score + 1);
		}
    //anyway we move to next question
		const nextQuestion = currentQuestion + 1;
    //check if we reach the end
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  //if showScore set to true we show score
  //if false we show quiz
  //use span to put things on a line
	return (
		<div>
			{showScore ? (
				<div>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div>
						<div>
							<span>Question {currentQuestion + 1}</span> of {questions.length}
						</div>
						<div>{questions[currentQuestion].questionText}</div>
					</div>
					<div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}