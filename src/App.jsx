import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonals/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portafolio/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;