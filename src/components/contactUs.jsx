import React from "react";
import "../assets/styles/contactUs.css";
import logo from "../assets/images/logo.jpg";

const ContactUs = () => {
  return (
    <div>
      <section id="contact-us">
        <div>
          <div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div>
            <form action="submit">
              <label htmlFor="Full-Name">
                <p>Full Name</p>
                <input type="text" id="Full-Name" required />
              </label>
              <label htmlFor="Email">
                <p>Email</p>
                <input type="email" id="Email" required />
              </label>
              <label htmlFor="Message">
                <p>Message</p>
                <textarea
                  name="Message"
                  id="Message"
                  cols="30"
                  rows="5"
                  required
                />
              </label>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Vanya</h1>
          </div>
            <nav>
              <a href="/">Home</a>
              <a href="#about-us">About us</a>
              <a href="#Service">Our Service</a>
              <a href="#location">location</a>
              <a href="#contact-us">Contact us</a>
            </nav>
        </div>
        <section>
          <p>Designed by Great</p>
        </section>
      </footer>
    </div>
  );
};

export default ContactUs;
