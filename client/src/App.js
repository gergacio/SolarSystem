import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//import components
import Home from "./components/Home";
import Header from "./components/Header";
import Learning from "./components/Learning";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import AltPlanet from "./components/AltPlanet";

function App() {
  //render router with all routes(components)
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/learning" element={< Learning />} />
        <Route path="/quiz" element={< Quiz />} />
        <Route path="*" element={< ErrorPage />} />
        <Route path="/altplanet" element={< AltPlanet />} />
      </ Routes>
      <Footer />
</Router>
 
 
  );
}

export default App;
