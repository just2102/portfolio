import react from "../../img/react.png"
import redux from "../../img/redux.svg"
import ts from "../../img/ts.png"
import js from "../../img/js.png"
import css from "../../img/css.png"
import html from "../../img/html.png"
import github from "../../img/github-mark-white.svg"

const Home = () => {
  const stackImages = [react,redux,ts,js,css,html]
  let stackMapped = stackImages.map(tech=> {
    return <div className="tech"><img src={tech} alt="" /></div>
  })

  return (<div className="homepage bg-slate-800">
    <div className="text bg-slate-900">
      <h1>Hi, I'm <span className="text-sky-500">Eli</span></h1>
      <p>Frontend Developer</p>
      <a href="https://github.com/just2102"><img src={github} alt="" /></a>
      <h2>My Stack</h2>
    </div>
    <div className="stack">
      {stackMapped}
    </div>
    </div>);
};

export default Home;