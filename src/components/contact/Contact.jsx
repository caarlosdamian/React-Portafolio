import { useRef, useState } from "react";
import "../../styles/contact.scss";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact({ setMenuOpen, nightMode }) {
  const [message, setMessage] = useState(null);
  const captcha = useRef(null);
  console.log(process.env.REACT_APP_EMAIL_API_KEY);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      emailjs
        .sendForm(
          "service_nvllena",
          "template_zzxueu9",
          e.target,
          `${process.env.REACT_APP_EMAIL_API_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMessage(true);
      e.target.reset();
    } else {
      setMessage(false);
    }
  };
  const onChange = () => {};
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
          <input type="email" placeholder="Email" name="email" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <ReCAPTCHA
            className="recapcha"
            ref={captcha}
            sitekey="6LchhREcAAAAAJEpVeg3xEfFTYZqTSpEVsZUBkE8"
            onChange={onChange}
          />
          {message === false && (
            <span className="catpcha">Please enter captcha</span>
          )}

          <button type="submit" value="Send">
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
