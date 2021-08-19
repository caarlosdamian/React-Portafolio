import "../../styles/menu.scss";

export default function Menu({ setMenuOpen, menuOpen,nightMode }) {
  return (
    <div className={"menu " + (menuOpen && "active ") + (nightMode && " night")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#work">Works</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
