import React from "react";
import "../assets/styles/location.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <>
      <section id="location">
        <div>
          <h2>Location</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <section>
          <div >
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div>
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div>
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Location;
