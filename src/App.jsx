import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import InfoPage from "./Components/InfoPage";
import AdvicePage from "./Components/AdvicePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="advice" element={<AdvicePage />} />
      </Routes>
    </>
  );
}

export default App;
