import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TestingPage from "./pages/TestingPage";
import FindingPage from "./pages/FindingPage";
import ResultPage from "./pages/ResultPage";
import GoogleTagManager from "./google";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <GoogleTagManager gtmId='G-NRVMPVQEDE' />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<TestingPage />} />
        <Route path='/find/:E/:I/:N/:S/:T/:F/:P/:J' element={<FindingPage />} />
        <Route path='/result/:mbti' element={<ResultPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
