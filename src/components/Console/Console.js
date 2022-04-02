import React from "react";
import styles from "./Console.module.scss";

const Console = () => {
  return (
    <section className={styles.console}>
      <div className={styles["console-container"]}>
        <div className={styles["console-wrapper"]}>
          <div className={styles["nav-wrapper"]}>
            <div className={styles["dots-wrapper"]}>
              <div id={styles.dot1} className={styles.dots}></div>
              <div id={styles.dot2} className={styles.dots}></div>
              <div id={styles.dot3} className={styles.dots}></div>
            </div>

            <div>
              <strong>bash</strong>
            </div>
            <div></div>
          </div>

          <div className={styles["top-row"]}>
            <strong>[sarah@ubuntu]~$ </strong>
            <p>neofetch</p>
          </div>

          <div className={styles["left-column"]}>
            <div className={styles["left-column-content"]}>
              <img src={require("../../assets/me.png")} alt="Me"></img>
            </div>
          </div>

          <div className={styles["right-column"]}>
            <div className={styles["right-column-content"]}>
              <strong className={styles.prompt}>sarah@ubuntu</strong>
              <br />
              ------------
              <p>
                <strong>About Me: </strong>
                <br />
                <br />
                <p>
                  Hey, I'm Sarah Guindy. I'm a software developer, cybersecurity
                  enthusiast, and privacy advocate. I'm typically either coding,
                  reading about the latest vulnerability, or creating pixel art
                  in my spare time. I also spend way too much time in the
                  terminal.
                </p>
              </p>
              <div className={styles["squares-wrapper"]}>
                <div id={styles.square1} className={styles.squares}></div>
                <div id={styles.square2} className={styles.squares}></div>
                <div id={styles.square3} className={styles.squares}></div>
                <div id={styles.square4} className={styles.squares}></div>
                <div id={styles.square5} className={styles.squares}></div>
                <div id={styles.square6} className={styles.squares}></div>
                <div id={styles.square7} className={styles.squares}></div>
                <div id={styles.square8} className={styles.squares}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Console;
