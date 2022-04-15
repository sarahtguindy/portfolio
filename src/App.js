import React from "react";
import Console from "./components/Console/Console";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Console />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
