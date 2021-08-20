import { useState } from "react";
import "../../styles/contact.scss";

export default function Contact({ setMenuOpen, nightMode }) {
  const [message, setMessage] = useState(false)
  const handleSubmit =(e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div
      className={"contact " + (nightMode && "night")}
      onClick={() => setMenuOpen(false)}
      id="contact"
    >
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>


    </div>
  );
}
