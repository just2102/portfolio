import React, { useEffect } from "react";
import { Routes, Route, } from "react-router";
import { HashRouter, Navigate } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer";
import Resume from "./Components/Resume/Resume";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app_wrapper">
      <Sidebar></Sidebar>
      <div className="content_wrapper bg-slate-800 text-slate-300">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/portfolio" element={<PortfolioContainer/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
      </Routes>
      </div>
    </div>
  );
}

const AppContainer = () => {
  return ( 
    <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
   );
}
 
export default AppContainer;
