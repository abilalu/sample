import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import HeroImage from "./components/HeroImage";
import FooterLine from "./components/FooterLine"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <FooterLine/>
      </div>
    </Router>
  );
}

export default App;
