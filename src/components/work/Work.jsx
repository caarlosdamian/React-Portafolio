import "../../styles/work.scss";
import { featuredPortfolio } from "../../data";
import { useState } from "react";
export default function Work({ nightMode }) {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = featuredPortfolio;
  const handleClick = (way) => {
    way === "left"
    ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 5)
    : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
  };
  return (
    <div className={"works " + (nightMode && " night")} id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="mobile" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}L</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt="arrow"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt="arrow"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
