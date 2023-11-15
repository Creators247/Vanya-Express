import React from "react";
import '../assets/styles/aboutUs.css'
import deli from "../assets/images/deli.png";

const AboutUs = () => {
    return (
      <>
        <section id="about-us">
          <div>
            <img src={deli} alt="Delivery Man Picture" draggable="false" />
          </div>
          <div>
            <div>
              <h2>About Us</h2>
              <span>
                <p>
                  At Vanya Express, we're more than just a delivery company –
                  we're your reliable partner in convenience and satisfaction.
                  Our journey began with a simple yet powerful vision: to make
                  the delivery process swift, secure, and seamless for every
                  customer we serve.
                </p>
                <p>
                  With a dedicated team of professionals and a fleet of vehicles
                  equipped for any task, we've set out to redefine the way you
                  experience delivery services. Whether it's a special gift for
                  a loved one, an essential package for your business, or
                  anything in between, we're here to ensure your items reach
                  their destination with the utmost care and efficiency.
                </p>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default AboutUs