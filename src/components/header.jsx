import "../assets/styles/header.css";
import React, {useState } from "react";
import art from "../assets/images/art.svg";
import logo from "../assets/images/logo.jpg";
import Deli from "../assets/images/deli2.png";
import { FaMapMarkerAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import {RiMenu2Fill, RiHome2Line, RiContactsLine, RiHandHeartLine,} from "react-icons/ri";

export default function header() {
  const Header = () => {
    let [menuClicked, setMenuCliked] = useState(false);

    const displayNavIcons = (event) => {
      const navSlide = event.target.previousElementSibling;
      const navDropDown = event.target.parentElement
      
      if (menuClicked == false) {
        menuClicked = true;
        setMenuCliked(menuClicked);
        navSlide.className = 'slide-in'
        event.target.style.animation = 'none'
        navDropDown.style.background = '#513601'
        event.target.style.borderColor = 'var(--main-color--)'
      } else {
        menuClicked = false;
        setMenuCliked(menuClicked);
        navSlide.className = 'slide-out'
        event.target.style.borderColor = '#513601'
        navDropDown.style.background = 'transparent'
        event.target.style.animation = 'float-shaker 0.7s infinite alternate-reverse'
      }
      if (navSlide.style.display == "") {
        navSlide.style.display = "flex";
      } else {
      }
    };
    const navOpenButtonText = (event) => {
      if (event.target.tagName == "DIV") {
        let navText = event.target.firstElementChild;
        let menuButton = event.target.parentElement.nextElementSibling;

        navText.className = 'fade-in';
        navText.style.display = "flex";
        event.target.style.gap = "20px";
        menuButton.style.alignSelf = "center";
      }
    };
    const navCloseButtonText = (event) => {
      if (event.target.tagName == "DIV") {
        let navText = event.target.firstElementChild;
        let menuButton = event.target.parentElement.nextElementSibling;
        if (navText.style.display == "flex") {
          navText.style.display = "";
          navText.className = 'fade-out';
          menuButton.style.alignSelf = "center";
        } else {
          navText.className = 'fade-in';
          navText.style.display = "flex";
        }
      }
    };
    return (
      <>
        <header>
          <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Vanya</h1>
          </div>
          <nav>
            <span className="slide-in slide-out">
              <div onMouseEnter={navOpenButtonText}  onMouseLeave={navCloseButtonText} >
                <a href="/" className="fade-in fade-out">Home</a >
                <button className="navbar-button">
                  <a href="/">
                    <RiHome2Line />
                  </a>
                </button>
              </div>

              <div onMouseEnter={navOpenButtonText}  onMouseLeave={navCloseButtonText} >
                <a href="#about-us" className="fade-in fade-out">About us</a>
                <button className="navbar-button">
                  <a href="#about-us">
                    <RiContactsLine />
                  </a>
                </button>
              </div>

              <div onMouseEnter={navOpenButtonText}  onMouseLeave={navCloseButtonText} >
                <a href="#service" className="fade-in fade-out">Our Service</a>
                <button className="navbar-button">
                  <a href="#service">
                    <RiHandHeartLine />
                  </a>
                </button>
              </div>

              <div onMouseEnter={navOpenButtonText}  onMouseLeave={navCloseButtonText} >
                <a href="#location" className="fade-in fade-out">location</a>
                <button className="navbar-button">
                  <a href="#location">
                    <FaMapMarkerAlt />
                  </a>
                </button>
              </div>

              <div onMouseEnter={navOpenButtonText}  onMouseLeave={navCloseButtonText} >
                <a href="#contact-us" className="fade-in fade-out">Contact us</a>
                <button className="navbar-button">
                  <a href="#contact-us">
                    <FaEnvelope />
                  </a>
                </button>
              </div>
            </span >
            <button className="navbar-button" onClick={displayNavIcons}>
              {menuClicked ? <FaTimes /> : <RiMenu2Fill />}
            </button>
          </nav>
        </header>
      </>
    );
  };
  const Main =()=>{
    return(<>
      <main >
        <section className="left">
          <div>
            <h1>
              Your Trusted Partner in Fast and Reliable Deliveries Bringing
              joy to your doorstep, one package at a time
            </h1>
            <p>Where Swift and Secure Deliveries Meet Your Convenience.</p>
          </div>
        </section>
        <section className="right">
          <img
            src={Deli}
            alt="Delivery Man Picture"
            className="Deli"
            draggable="false"
          />
          <img src={art} alt="Vector" draggable="false" />
        </section>
      </main></>)
  }
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
