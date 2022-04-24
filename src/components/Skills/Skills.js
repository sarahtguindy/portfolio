import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <>
      <section className={styles.skills}>
        <div className="container">
          <div className={styles["skills-container"]}>
            <div className={styles.showcase}>
              <div id={styles.skill1} className={styles.skill}>
                <div className={styles.heading}>
                  <i className="fa-solid fa-code"></i>
                  <h2>Full Stack & Mobile Development</h2>
                </div>
                <p>
                  Comfortable with both front-end and back-end development, and
                  developing applications for iOS and Android platforms. Good
                  grasp of the fundamentals such as object-oriented and
                  functional programming paradigms, data structures and
                  algorithms, and common design patterns.
                </p>
              </div>

              <div id={styles.skill2} className={styles.skill}>
                <div className={styles.heading}>
                  <i className="fa-solid fa-database"></i>
                  <h2>Database Programming</h2>
                </div>
                <p>
                  Database management and administration, including schema
                  creation, data manipulation, applying privileges and privacy
                  policies, and implementing backup and recovery strategies.
                </p>
              </div>

              <div id={styles.skill3} className={styles.skill}>
                <div className={styles.heading}>
                  <i className="fa-solid fa-cloud"></i>
                  <h2>Cloud Services</h2>
                </div>
                <p>
                  Experience with Azure and its core services and features,
                  including security, identity, privacy, governance, and
                  compliance.
                </p>
              </div>

              <div id={styles.skill4} className={styles.skill}>
                <div className={styles.heading}>
                  <i className="fa-solid fa-bug"></i>
                  <h2>Testing & Debugging</h2>
                </div>
                <p>
                  Familiar with automated testing strategies such as unit
                  testing, integration testing, E2E testing, as well as
                  test-driven development techniques.
                </p>
              </div>

              <div id={styles.skill5} className={styles.skill}>
                <div className={styles.heading}>
                  <i className="fa-solid fa-terminal"></i>
                  <h2>CLI & Scripting</h2>
                </div>
                <p>
                  Proficient with the Linux command-line, PowerShell, and shell
                  scripting with Bash and Python.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
