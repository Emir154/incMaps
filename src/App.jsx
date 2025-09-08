import Home from "./Pages/Home/Home";
import Community from "./Pages/Community/Community";
import Weather from "./Pages/Weather/Weather";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </>
  );
}

