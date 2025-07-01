import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import Weather from "./pages/Weather/Weather";
import {Route, Routes} from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/Weather" element={<Weather />} />
            </Routes>
    </>
  );
}

