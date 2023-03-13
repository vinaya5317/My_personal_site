import React from "react";

function Contact() {
  return (
    <div className="contact-me">
      <h2>Get In Touch</h2>
      <h3>If you have any requirement for ReactJS.</h3>
      <p class="contact-message">
        Please provide me details for the same by clicking on contact me😃😃.
      </p>
      {/* <p class="contact-message">Thanks for visting my Page😊</p> */}
      <a class="btn" href="mailto:reactjsopenings.com">
        CONTACT ME
      </a>
      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com">
          LinkedIn
        </a>
        <a className="footer-link" href="https://twitter.com">
          Twitter
        </a>

        <p className="copyright">© 2023 Vinaya Rekha.</p>
      </div>
    </div>
  );
}

export default Contact;
