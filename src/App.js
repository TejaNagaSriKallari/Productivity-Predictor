import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
 import Predictor from "./pages/Predictor"; // Add this once you create it
import Result from './pages/Result';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/predictor" element={<Predictor />} /> 
         <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
