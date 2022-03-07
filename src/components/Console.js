import React from "react";
import styles from "./Console.module.css";

const Console = () => {
  return (
    <section className={styles.console}>
      <div className="container">
        <div className={styles.consolewrapper}>
          <div className={styles.navwrapper}>Nav</div>

          <div className={styles.leftcolumn}>Left</div>

          <div className={styles.rightcolumn}>Right</div>
        </div>
      </div>
    </section>
  );
};

export default Console;
