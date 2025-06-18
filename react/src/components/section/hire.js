import React from "react";
import "./hire.css";

function HireSection() {
  return (
    <section className="hire-section" id="hire">
      <h2>Let's Work Together</h2>
      <p className="hire-desc">
        Interested in collaborating or hiring me for your next project? <br />
        I am open to new opportunities and exciting challenges. <br />
        <b>Contact:</b>{" "}
        <a
          href="mailto:arindamsharma1998@gmail.com"
          className="hire-link"
        >
          arindamsharma1998@gmail.com
        </a>
      </p>
      <a href="mailto:arindamsharma1998@gmail.com" className="hire-btn">
        Hire Me
      </a>
    </section>
  );
}

export default HireSection;
