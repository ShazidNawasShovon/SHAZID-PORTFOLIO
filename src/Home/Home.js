import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="home__bg" id="Home">
      {/* HOME CONTENT */}
      <div className="container">
        <div
          className="home__content"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="home__meta">
            <h2 className="home__text pz__10">Hi, I’m Shazid Nawas Shovon</h2>
            <h3 className="home__text sweet pz__10">MERN-STACK-DEVELOPER</h3>
            <a href="https://drive.google.com/uc?export=download&id=1ziISzhTXdUmC2AWNRp1qocgJ73_-UOZ2">
              <button
                className="about btn pointer mt-3 ms-0"
                data-aos="fade-up-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
