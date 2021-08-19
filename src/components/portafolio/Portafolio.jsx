import { useState } from "react";
import "../../styles/portafolio.scss";
import PortafolioList from "../portafolioList/PortafolioList";
import {
  featuredPortfolio,
  webPortfolio,
} from "../../data";
import { useEffect } from "react";

export default function Portafolio({ nightMode }) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },

  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className={"portafolio " + (nightMode && " night")} id="portafolio">
      <h1>Portafolio</h1>
      <ul>
        {list.map((item) => (
          <PortafolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="projects" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
