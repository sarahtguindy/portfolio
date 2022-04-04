import React from "react";
import styles from "./Project.module.scss";

const Project = ({ icon, title, tags, description, links }) => {
  return (
    <div className={styles.card}>
      <i className={icon}></i>
      <h2>{title}</h2>
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li className={styles.tag}>{tag}</li>
        ))}
      </ul>
      <p>{description}</p>
      <div className={styles.links}>
        {links.map((link) => (
          <button>{link}</button>
        ))}
      </div>
    </div>
  );
};

export default Project;
