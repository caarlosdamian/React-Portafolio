import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonals/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="app">
      <Topbar/>
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
