import "../../styles/testimonials.scss";
import { testimonials } from "../../data";

export default function Testimonials({ nightMode, setMenuOpen }) {
  return (
    <div
      className={"testimonials " + (nightMode && "night")}
      id="testimonials"
      onClick={() => setMenuOpen(false)}
    >
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={testimonial.featured ? "card featured" : "card"}
          >
            <div className="top">
              <img
                src="assets/right-arrow.png"
                alt="right-arrow"
                className="left"
              />
              <img src={testimonial.img} alt="profile" className="user" />
              <img src={testimonial.icon} alt="youtube" className="right" />
            </div>
            <div className="center">{testimonial.desc}</div>
            <div className="bottom">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
