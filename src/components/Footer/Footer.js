import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <footer>
          <p className={styles.copyright}>
            Copyright &copy; 2024 sarahtguindy.dev
          </p>
          <div className={styles.socials}>
            <a
              href="https://github.com/sarahtguindy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sarahtguindy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://medium.com/@sarahtguindy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
