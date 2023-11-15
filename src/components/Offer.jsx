import React from 'react'
import '../assets/styles/Offer.css'
import { FaLocationDot } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";

const offer = () => {
    return (
      <>
        <section id="offer">
          <div>
            <h2>What We offer</h2>
          </div>
          <section>
            <div style={{ borderLeft: "0px" }}>
              <GiDeliveryDrone className="icons" />
              <div>
                <h4>Lightning-speed delivery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div>
              <FaLocationDot className="icons" />
              <div>
                <h4>Live Order Tracking</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div>
              <RiCustomerService2Line className="icons" />
              <div>
                <h4>24/7 Customer-Care</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  };

export default offer