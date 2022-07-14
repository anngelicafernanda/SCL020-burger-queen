import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ReactRoter from "./components/ReactRouter/ReactRoter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ReactRoter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
