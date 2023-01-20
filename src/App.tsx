import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app_wrapper">
      <Sidebar></Sidebar>
      <div className="content_wrapper bg-slate-700 text-slate-300">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

const AppContainer = () => {
  return ( 
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
   );
}
 
export default AppContainer;
