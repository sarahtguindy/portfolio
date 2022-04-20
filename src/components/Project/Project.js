import React from "react";
import styles from "./Project.module.scss";

const Project = ({ title, tags, description, links }) => {
  let codeLink = links[0];
  let demoLink = links[1];
  let flag = false;

  if (demoLink === "") {
    flag = true;
  }

  return (
    <div className={styles.card}>
      <h2>{title}</h2>

      <ul className={styles.tags}>
        {tags.map((tag, i) => (
          <li key={i} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>

      <p>{description}</p>

      <div className={styles.links}>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button>Code</button>
        </a>
        {flag || (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button>Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
