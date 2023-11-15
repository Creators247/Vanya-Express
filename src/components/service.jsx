import React, { useEffect } from "react";
import "../assets/styles/service.css";

const sectionHoverAnimation = () => {
  if (window.innerWidth > 768) {
    const section = document.getElementsByClassName("section1")[0];
    const highlight = (event) => {
      event.target.firstElementChild.style.zIndex = 1;
      event.target.firstElementChild.style.color = "var(--main-color--)";
      event.target.lastElementChild.style.zIndex = 1;
      event.target.lastElementChild.style.color = "white";
    };
    const lowlight = (event) => {
      event.target.firstElementChild.style.color = "white";
      event.target.lastElementChild.style.color = "#513601";
    };
    new Array(...section.children).forEach((items) => {
      items.addEventListener("mouseover", highlight);
    });
    new Array(...section.children).forEach((items) => {
      items.addEventListener("mouseout", lowlight);
    });
  }
};

const Service = () => {
  useEffect(sectionHoverAnimation, [window.innerWidth]);
  return (
    <>
      <section id="service">
        <div>
          <h2>Our Sevices</h2>
          <p>
            {" "}
            We deliver convenience, From speedy deliveries to specialized
            solutions, we've got you covered.
          </p>
        </div>

        <div className="section1">
          <section className="first">
            <h4>Swift and Reliable Deliveries</h4>
            <p>
              Vanya Express prioritizes speed without compromising reliability.
              We guarantee timely deliveries to meet your urgent needs, ensuring
              your packages arrive promptly.
            </p>
          </section>
          <section className="second">
            <h4>Personalized Customer Service</h4>
            <p>
              Our commitment to customer satisfaction sets us apart. Experience
              personalized service with a dedicated team ready to assist you at
              every step, addressing your queries and ensuring a smooth delivery
              experience
            </p>
          </section>
          <section className="third">
            <h4>Sustainable Practices</h4>
            <p>Vanya Express is committed to eco-friendly initiatives</p>
          </section>
          <section className="first">
            <h4> Advanced Tracking Technology</h4>
            <p>
              Stay in control with our cutting-edge tracking system. Vanya
              Express provides real-time updates on the status of your
              deliveries, offering transparency and peace of mind throughout the
              shipping process
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Service;
