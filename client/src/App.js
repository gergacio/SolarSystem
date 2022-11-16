import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//import components
import Home from "./components/Home";
import Header from "./components/Header";
import Learning from "./components/Learning";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import styled from "styled-components";
import QuizService from "./services/QuizService";


//display parent as flex
const StyledRouter = styled.div`
display: flex;
flex-direction: column;
`

function App() {
  const [ quizData, setQuizData ] = useState(null);
  useEffect(() => {
    QuizService.getQuiz()
    .then(q => setQuizData(q))

  }, [])
  //render router with all routes(components)
  return (
    <Router>
      <StyledRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/learning" element={< Learning />} />
          <Route path="/quiz" element={< Quiz quizData={quizData} />} />
          <Route path="*" element={< ErrorPage />}/>
        </ Routes>
        <Footer />
      </StyledRouter>
    </Router>
  );
}

export default App;
