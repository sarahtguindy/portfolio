import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className="spacer2"></div>

      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles["contact-container"]}>
            <h1>Contact Me</h1>
            <p>
              Like what you see? Want to hire me? Or maybe you just want to geek
              out and swap dotfiles? <strong>Let's get in touch.</strong>
            </p>

            <div className={styles["form-container"]}>
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />

                <p className={styles["first-name-area"]}>
                  <label htmlFor="first-name">First Name</label> <br />
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                  />
                </p>
                <p className={styles["last-name-area"]}>
                  <label htmlFor="last-name">Last Name</label> <br />
                  <input type="text" id="last-name" name="last-name" required />
                </p>
                <p className={styles["email-area"]}>
                  <label htmlFor="email">Email</label> <br />
                  <input type="email" id="email" name="email" required />
                </p>
                <p className={styles["message-area"]}>
                  <label htmlFor="message">Message</label> <br />
                  <textarea id="message" name="message" required></textarea>
                </p>
                <p className={styles["submit-area"]}>
                  <input type="submit" value="Send" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
