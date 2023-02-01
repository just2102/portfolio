import Portfolio from "./Portfolio";
import { useEffect, useState } from "react";

export type RepoType = {
  id: number;
  live: string;
  github: string;
  img: string;
  name: string;
  desc: string;
};
const PortfolioContainer = () => {
  const [repos, setRepos] = useState([
    {
      id: 1,
      live: "https://just2102.github.io/InContact/",
      github: "https://github.com/just2102/InContact",
      img: "https://user-images.githubusercontent.com/88230737/213840535-1844430c-47d2-4d25-b32c-dc570d6d3199.png",
      name: "InContact — A Social Network",
      desc: "A full-scale React SPA built with Redux, Thunk MW and react-hook-form",
    },
    {
      id: 2,
      live: "https://livechat-d1046.web.app/",
      github: "https://github.com/just2102/livechat",
      img: "https://user-images.githubusercontent.com/88230737/213845183-ea96e612-40c8-493c-8962-85b3adad22b0.png",
      name: "Livechat",
      desc: "Chat SPA built with React & Firestore",
    },
    {
      id: 3,
      live: "https://just2102.github.io/Checkers.JS/",
      github: "https://github.com/just2102/Checkers.JS",
      img: "https://user-images.githubusercontent.com/88230737/215968964-e1587260-badb-4909-a97e-8d3c03bba917.png",
      name: "Checkers.JS",
      desc: "Checkers game made with Vanilla JavaScript",
    },
    {
      id: 4,
      live: "https://just2102.github.io/Calculator/",
      github: "https://github.com/just2102/Calculator",
      img: "https://user-images.githubusercontent.com/88230737/213842673-1eb85848-3cff-41e3-b004-33b2ae171fde.png",
      name: "Calculator",
      desc: "A simple but beautiful calculator I made with Vanilla JS",
    },
    {
      id: 5,
      live: "https://just2102.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/just2102/Rock-Paper-Scissors",
      img: "https://user-images.githubusercontent.com/88230737/215971902-6b2b0d4a-aab8-458f-8ea0-95a60e571422.png",
      name: "Rock, Paper, Scissors",
      desc: "Classic game built with Vanilla JS and modern CSS",
    },
    {
      id: 6,
      live: "https://just2102.github.io/Weather-App/",
      github: "https://github.com/just2102/Weather-App",
      img: "https://user-images.githubusercontent.com/88230737/213844875-75c86605-04d3-4091-b7fc-8319ad32dc21.png",
      name: "Weather App",
      desc: "Uses Google and Open Weather API to display weather anywhere in the world",
    },
    {
      id: 7,
      live: "https://just2102.github.io/To-Do-List/",
      github: "https://github.com/just2102/To-Do-List",
      img: "https://user-images.githubusercontent.com/88230737/213845282-88e27170-647b-4d33-8f76-349bbee9c0b6.png",
      name: "To Do List",
      desc: "Built with vanilla JS, apart from the basic functionality, this project includes comprehensive custom form validation built with constraint validation API",
    },
  ]);
  return <Portfolio repos={repos} />;
};

export default PortfolioContainer;
