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

            <form
              name="contact v1"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="hidden-form" value="contact v1" />

              <div>
                <label htmlFor="first-name">First Name</label> <br />
                <input id="first-name" type="text" name="first-name" />
              </div>

              <div>
                <label htmlFor="email">Email</label> <br />
                <input id="email" type="email" name="email" />
              </div>

              <div>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message"></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
