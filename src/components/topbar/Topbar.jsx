import "../../styles/topbar.scss";
// import PersonIcon from '@material-ui/icons/Person';
import MailIcon from "@material-ui/icons/Mail";

export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Damian.
          </a>
          {/* <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>3121345461</span>
                    </div> */}
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
