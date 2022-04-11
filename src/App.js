import React from "react";
import Console from "./components/Console/Console";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Console />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
