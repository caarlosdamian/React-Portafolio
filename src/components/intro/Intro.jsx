import "../../styles/intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay:  1500,
      backSpeed:60,
      showCursor:true,
      strings: ["React Guru","Freelancer","Cat Lover", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.png" alt="myPhoto" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Carlos Damian</h1>
          <h3>Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portafolio">
          <img src="assets/down.png" alt="down-arrow" />
        </a>
      </div>
    </div>
  );
}
