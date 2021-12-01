import React, { useEffect } from "react";

import "./Blog.css";
import Blog1 from "../img/blog-01.jpg";
import Blog2 from "../img/blog-02.jpg";
import Blog3 from "../img/blog-03.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest Blog</h1>
        <p className="heading p__color">
          Blog will be available soon. These are just demo blog.
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col__3"
            data-aos="zoom-out-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div
            className="col__3"
            data-aos="zoom-out-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="blog project__btn btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
