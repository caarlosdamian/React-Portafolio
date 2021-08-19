import { useState } from "react";
import "../../styles/portafolio.scss";
import PortafolioList from "../portafolioList/PortafolioList";

export default function Portafolio({ nightMode }) {
  const [selected, setSelected] = useState("featured");
  const list = [
    { id: "featured", title: "Featured" },
    { id: "webapp", title: "Web App" },
    { id: "mobileapp", title: "Mobile app" },
    { id: "desing", title: "Desing" },
    { id: "branding", title: "Branding" },
    { id: "testng", title: "Testing" },
  ];
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
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/qph2cZn/image.pngg" alt="" />
          <h3>Travel App</h3>
        </div>
      </div>
    </div>
  );
}
