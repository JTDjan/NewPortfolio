import "./app.scss";
import { useState } from "react";

//import components
import Nav from "./components/Nav/Nav";
import Landing from "./components/LandingPage/Landing";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
