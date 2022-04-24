import React from "react";
import styles from "./About.module.scss";
import Console from "../Console/Console";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <Console />
        <Skills />
      </section>
    </>
  );
};

export default About;
