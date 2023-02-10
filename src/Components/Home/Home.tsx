import react from "../../img/react.png";
import redux from "../../img/redux.svg";
import ts from "../../img/ts.png";
import js from "../../img/js.png";
import node from "../../img/nodejs.svg"
import mongo from "../../img/mongodb.svg"
import css from "../../img/css.png";
import html from "../../img/html.png";
import github from "../../img/github-mark-white.svg";
import Tech from "./Tech";
import Canvas from "./Canvas.jsx";

const Home = () => {
  const stackImages = [react, redux, ts, js, node, mongo, css];
  let stackMapped = stackImages.map((tech,index) => {
    return (
     <Tech tech={tech} key={index}></Tech>
    );
  });

  return (
    <div className="homepage bg-slate-800">
      <Canvas></Canvas>
      <div className="text bg-slate-900">
        <h1>
          Hi, I'm <span className="text-sky-500">Ilia</span>
        </h1>
        <p>Frontend Developer</p>
        <a href="https://github.com/just2102">
          <img src={github} alt="" />
        </a>
        <h2>My Stack</h2>
      </div>
      <div className="stack">{stackMapped}</div>
    </div>
  );
};

export default Home;
