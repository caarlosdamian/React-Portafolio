import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonals/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        nightMode={nightMode}
        setNightMode={setNightMode}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} nightMode={nightMode}/>
      <div className="sections">
        <Intro nightMode={nightMode} setMenuOpen={setMenuOpen}/>
        <Portafolio nightMode={nightMode} setMenuOpen={setMenuOpen}  />
        <Work nightMode={nightMode} setMenuOpen={setMenuOpen} />
        <Testimonials nightMode={nightMode} setMenuOpen={setMenuOpen} />
        <Contact nightMode={nightMode} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
