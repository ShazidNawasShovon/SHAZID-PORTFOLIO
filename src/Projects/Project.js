import React, { useEffect } from "react";
import "./Project.css";
import Project1 from "../img/2 (1).png";
import Project2 from "../img/5.png";
import Project3 from "../img/Image 5 (1).png";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Recently I have completed some projects
        </p>
      </div>
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div
            className="col__3 "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Full Stack Development</h5>
                <p className="project__text text-white fw-bold"> Dream Car</p>
                <p className="project__text text-white fw-bold">
                  {" "}
                  We sell American Muscle Car
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dream-car-c0ccd.web.app/"
                  className="project__btn"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Full-Stack-Development</h5>
                <p className="project__text text-white fw-bold"> Go Tour</p>
                <p className="project__text text-white fw-bold">
                  {" "}
                  We provides Tour Service
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://go-tour-eebdc.web.app/"
                  className="project__btn"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>

          <div
            className="col__3 "
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Front end Development</h5>
                <p className="project__text text-white fw-bold">
                  {" "}
                  Medi Ambulance
                </p>
                <p className="project__text text-white fw-bold">
                  {" "}
                  We provides Emergency Ambulance services
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medi-ambulance-a3d41.web.app/"
                  className="project__btn"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ShazidNawasShovon"
            >
              <button className="view__more pointer btn">View more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
