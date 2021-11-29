import React, { useEffect } from "react";
import "./About.css";
import aboutImg from "../img/h.png";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init();
  });
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div
          className="row"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
        >
          <div
            className="col__2 "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div
            className="col__2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                A full-stack web developer should have a proven ability to adapt
                to both self-starting and collaborative environments while
                staying focused on achieving high-quality results under strict
                deadlines. This quality and results- based approach pave the
                same way as the company's goal. I'm looking for a competitive
                career at a prestigious organization like yours that will allow
                me to improve my knowledge and enhance my developer skills.
              </p>

              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/uc?export=download&id=1ziISzhTXdUmC2AWNRp1qocgJ73_-UOZ2">
                  <button className="about btn pointer">Resume</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
