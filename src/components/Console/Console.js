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
                  Software Developer based in Toronto with over 2 years of
                  professional experience in backend and mobile development, and
                  a background in QA analysis.
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
