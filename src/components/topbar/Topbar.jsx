import "../../styles/topbar.scss";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import MailIcon from "@material-ui/icons/Mail";

export default function Topbar({
  setMenuOpen,
  menuOpen,
  setNightMode,
  nightMode,
}) {
  return (
    <div className={"topbar " + (menuOpen && "active ") + (nightMode&& " night")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Damian.
          </a>
          <div className="itemContainer">
            <NightsStayIcon
              className="icon"
              onClick={() => setNightMode(!nightMode)}
            />
            <span>Mode</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>carlos@touchof.tech</span>
          </div>
        </div>

        <div className="right">
          <div className="hambuerger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line3"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
