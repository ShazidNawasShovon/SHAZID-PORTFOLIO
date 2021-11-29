import React, { useEffect } from "react";
import "./Service.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Service() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Skills</h1>
        <p className="heading p__color">I learn some Skills</p>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col__3 px-auto"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-html5"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Html5</h1>
              </div>
            </div>
          </div>
          <div
            className="col__3 px-auto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className=" px-auto mx-auto service__box pointer ">
              <div className="icon mx-auto ">
                <i className="fab fa-bootstrap px-auto mx-auto"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text text-center">Bootstrap</h1>
                <p className="p service__text p__color"></p>
              </div>
            </div>
          </div>
          <div
            className="col__3 px-auto"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className=" px-auto mx-auto service__box pointer ">
              <div className="icon mx-auto ">
                <i className="fab fa-npm"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Npm</h1>
                <p className="p service__text p__color"></p>
              </div>
            </div>
          </div>
          <div
            className="col__3 px-auto mx-auto"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-js"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Java Script</h1>
                <p className="p service__text p__color"></p>
              </div>
            </div>
          </div>
          <div
            className="col__3 px-auto mx-auto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-react"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">React JS</h1>
                <p className="p service__text p__color"></p>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text"> FireBase</h1>
              </div>
            </div>
          </div>
          <div
            className="col__3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text"> GitHub</h1>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-mdb"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">MongoDB</h1>
                <p className="p service__text p__color"></p>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="service__box pointer">
              <div className="icon">
                <i className="fab fa-node"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Node JS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
