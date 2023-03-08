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
      id: 0,
      live: "https://just2102.github.io/FarerLibFrontend/#/library",
      github: "https://github.com/just2102/FarerLibFrontend",
      img: "https://user-images.githubusercontent.com/88230737/223655799-f45a49d6-006a-40f6-9437-8f2f3d8ebe13.png",
      name: "FarerLib - an online library",
      desc: "Fullstack online library web application built with custom API",
    },
    {
      id: 1,
      live: "https://just2102.github.io/InContact/",
      github: "https://github.com/just2102/InContact",
      img: "https://user-images.githubusercontent.com/88230737/213840535-1844430c-47d2-4d25-b32c-dc570d6d3199.png",
      name: "InContact — A Social Network",
      desc: "A full-scale React SPA built with Redux",
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
      img: "https://user-images.githubusercontent.com/88230737/223658709-008eeeab-57eb-47fd-8255-856805807f54.png",
      name: "Calculator",
      desc: "A simple calculator made with Vanilla JS",
    },
    {
      id: 5,
      live: "https://just2102.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/just2102/Rock-Paper-Scissors",
      img: "https://user-images.githubusercontent.com/88230737/223659390-69bb5847-8e7c-4da2-9741-bbfd697b6cdf.png",
      name: "Rock, Paper, Scissors",
      desc: "Classic game built with Vanilla JS and modern CSS",
    },
    // {
    //   id: 6,
    //   live: "https://just2102.github.io/Weather-App/",
    //   github: "https://github.com/just2102/Weather-App",
    //   img: "https://user-images.githubusercontent.com/88230737/213844875-75c86605-04d3-4091-b7fc-8319ad32dc21.png",
    //   name: "Weather App",
    //   desc: "Uses Google and Open Weather API to display weather anywhere in the world",
    // },
  ]);
  return <Portfolio repos={repos} />;
};

export default PortfolioContainer;
