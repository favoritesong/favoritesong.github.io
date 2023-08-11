import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TestingPage from "./pages/TestingPage";
import FindingPage from "./pages/FindingPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/test' element={<TestingPage />} />
      <Route path='/find/:E/:I/:N/:S/:T/:F/:P/:J' element={<FindingPage />} />
      <Route path='/result/:mbti' element={<ResultPage />} />
    </Routes>
  );
}

export default App;
