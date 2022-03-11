import "./app.scss";

//import
import Nav from "./components/Nav/Nav";
import Landing from "./components/LandingPage/Landing";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Nav />
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
