import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import "./style/App.scss";
import StudyCase from './components/StudyCase';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/works/:studySlug" element={<StudyCase />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
