import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 45,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        delayChildren: 0.2,
      },
    },
    closed: {
      top: "-30vh",
      transition: {
        when: "afterChildren",
      },
    },
  };

  const listFadeIn = {
    opened: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className={styles.navbar}>
      <nav className={styles["navbar-container"]}>
        <div className={styles["flex-container"]}>
          <div className={styles["left-column"]}>
            <a href="#top">
              <h1>
                Sarah Guindy <i className="fa-solid fa-code"></i>
              </h1>
            </a>
          </div>

          <div className={styles["right-column"]}>
            <motion.i
              className="fa-solid fa-plus"
              initial={false}
              variants={iconVariants}
              animate={isOpen ? "opened" : "closed"}
              onClick={() => setIsOpen((state) => !state)}
            ></motion.i>
          </div>
        </div>

        <motion.ul
          className={styles.menu}
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
        >
          <motion.li variants={listFadeIn}>
            <a href="#top">About</a>
          </motion.li>
          <motion.li variants={listFadeIn}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li variants={listFadeIn}>
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>

      <nav className={styles["navbar-container-lg"]}>
        <div className={styles["flex-container-lg"]}>
          <div className={styles["left-column-lg"]}>
            <a href="#top">
              <h1>
                Sarah Guindy <i className="fa-solid fa-code"></i>
              </h1>
            </a>
          </div>
          <div className={styles["right-column-lg"]}>
            <ul className={styles["menu-lg"]}>
              <li>
                <a className={styles.tag} href="#top">
                  About
                </a>
              </li>
              <li>
                <a className={styles.tag} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={styles.tag} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
