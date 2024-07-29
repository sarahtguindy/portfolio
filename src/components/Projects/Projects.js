import React from "react";
import styles from "./Projects.module.scss";
import Project from "../Project/Project";

const Projects = () => {
  const projects = [
    {
      title: "NuGet Consolidate",
      tags: ["Python"],
      description:
        "A CLI tool primarily for VSCode users that emulates the functionality of the Consolidate tab from Visual Studio.",
      links: ["https://github.com/sarahtguindy/nuget-consolidate-cli", ""],
    },
    {
      title: "Portfolio",
      tags: ["React", "CSS Modules", "SCSS", "Framer Motion"],
      description:
        "My portfolio website. Inspired by my favourite code editor theme Nord, Unix, and my love for the command line. Built with a mobile-first design philosophy.",
      links: ["https://github.com/sarahtguindy/portfolio", ""],
    },
    {
      title: "MechaniKeys",
      tags: ["React", "Redux", "Express", "MongoDB", "React Bootstrap"],
      description:
        "An eCommerce platform with fully functional feautures such as a shopping cart, admin management, a product review system, pagination, and PayPal/credit card integration.",
      links: [
        "https://github.com/sarahtguindy/mechanikeys",
        "https://mechanikeys-mern.onrender.com",
      ],
    },
  ];

  return (
    <>
      <div className="spacer"></div>

      <section id="projects" className={styles.projects}>
        <div className="container">
          <div className={styles["projects-container"]}>
            <h1>Project Spotlight</h1>
            <p>
              Here are just a few notable projects of mine, some of which have a
              demo, along with a link to that project's repo where you can find
              more information about each project.{" "}
              <strong>
                You can find even more of my work on{" "}
                <a
                  href="https://github.com/sarahtguindy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </strong>{" "}
              where I post smaller projects/scripts that you won't find here!
            </p>

            <div className={styles.cards}>
              {projects.map((project, i) => (
                <Project
                  key={i}
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
