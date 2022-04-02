import React from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <>
      <div className="spacer"></div>

      <section className={styles.projects}>
        <div className="container">
          <div className={styles["projects-container"]}>
            <h1>Projects</h1>
            <p>
              Here are just a few of <strong>my most notable projects</strong>,
              some of which have their own live demo, along with a link to that
              project's repo where you can find more information about each
              project.{" "}
              <strong>You can find even more of my work on GitHub</strong> where
              I post fun little scripts and smaller projects that you won't find
              here!
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <i class="fa-solid fa-tags"></i>
                <h2>MechaniKeys</h2>
                <ul className={styles.tags}>
                  <li className={styles.tag}>React</li>
                  <li className={styles.tag}>Redux</li>
                  <li className={styles.tag}>Express</li>
                  <li className={styles.tag}>MongoDB</li>
                  <li className={styles.tag}>React Bootstrap</li>
                </ul>
                <p>
                  An eCommerce platform with fully functional feautures such as
                  a shopping cart, admin management, a product review system,
                  pagination, and PayPal/credit card integration.
                </p>
                <div className={styles.links}>
                  <button>Code</button>
                  <button>Demo</button>
                </div>
              </div>
              <div className={styles.card}>
                <i class="fa-solid fa-gamepad"></i>
                <h2>MemBot</h2>
                <ul className={styles.tags}>
                  <li className={styles.tag}>Android</li>
                  <li className={styles.tag}>Kotlin</li>
                  <li className={styles.tag}>XML</li>
                  <li className={styles.tag}>Room</li>
                </ul>
                <p>
                  My capstone (group) project. An Android app built with Kotlin
                  that includes several minigames which all aim to improve a
                  user's memory, and allows users to track their progress using
                  distinct metrics.
                </p>
                <div className={styles.links}>
                  <button>Code</button>
                  <button>Demo</button>
                </div>
              </div>
              <div className={styles.card}>
                <i class="fa-solid fa-laptop-code"></i>
                <h2>Portfolio</h2>
                <ul className={styles.tags}>
                  <li className={styles.tag}>React</li>
                  <li className={styles.tag}>CSS Modules</li>
                  <li className={styles.tag}>SCSS</li>
                  <li className={styles.tag}>Framer Motion</li>
                </ul>
                <p>
                  You're looking at it. My portfolio website. Inspired by my
                  favourite code editor theme Nord, Unix, and my love for the
                  command line. Built with a mobile-first design philosophy.
                </p>
                <div className={styles.links}>
                  <button>Code</button>
                  <button>Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
