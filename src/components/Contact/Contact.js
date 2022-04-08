import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className="spacer2"></div>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles["contact-container"]}>
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <strong>labore et dolore </strong>
              magna aliqua. Aliquam etiam erat velit scelerisque. Scelerisque
              felis imperdiet proin fermentum leo.
            </p>

            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
              </p>
              <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
              </p>
              <p>
                <input type="submit" value="Submit message" />
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
