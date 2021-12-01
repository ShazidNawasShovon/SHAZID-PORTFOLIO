import React, { useEffect, useState } from "react";
import "./Project.css";
import Project1 from "../img/2 (1).png";
import Project2 from "../img/5.png";
import Project3 from "../img/Image 5 (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Modal } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router";

function Project() {
  // const { ProjectId } = useParams();
  // const [p, setP] = useState([]);
  // useEffect(() => {
  //   fetch("/data.JSON")
  //     .then((res) => res.json())
  //     .then((data) => setP(data));
  // }, []);
  const data = [
    {
      id: 1,
      name: "Dream-Car",
      details:
        "We’re in the business of dealing great muscle cars. But we also work every day to apply and share our know-how in ways that benefit people, the community, and our planet in order to build a better tomorrow.",
      feature: `*You can See Top Muscle Car in our online shop
                *You can Buy a Car
                *We have admin option
                *If you are an admin then you can see more option *that a normal user can not see.
                *If you are an admin then you can add product, *manage product & mange all order
                *If you a regular user then you can see your order & you can give a review in the dashboard
                *we have Login system, if a normal user come and want to buy a product than he/she have to login then we will redirect him to the page that he/she want to go earlier and if you a new user then you have to register first.`,
      img1: "https://i.ibb.co/MBkvSCm/Image-1.png",
      img2: "https://i.ibb.co/qBhZMPV/Image-2.png",
      img3: "https://i.ibb.co/F4PLbN5/img3.jpg",
      Technologies:
        " React Js, FireBase, Bootstrap, Material Ui, MongoDb, NodeJs,Express Js, GitHub, Heoku",
      link: "https://dream-car-c0ccd.web.app/",
      client: "https://github.com/ShazidNawasShovon/Dream-Car-Client-Site",
      server: "https://github.com/ShazidNawasShovon/Dream-Car-Server-Site",
    },
    {
      id: 2,
      name: "Go-Tour",
      details:
        "To help you make the most of your time in this amazing country, refer often to our list of the top things to do while you are traveling with us. we make your travel easier.Mother Earth along with mankind have co-created some of the most spectacular places on this planet. From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant.",
      feature: `We are Tourist Spots & services
                We have Special Offers & Packages
                We can manage ours users data
                You contact us in any time by signing in to our site.
                We provide best tourist service .
                We have top Team members in your services.
                We have Booking Systems where you can see your booking and all other people bookings.`,
      img1: "https://i.ibb.co/QjPyywW/img4.png",
      img2: "https://i.ibb.co/tCV954x/img5.png",
      img3: "https://i.ibb.co/2ZTprhw/Image-3.png",
      Technologies:
        " React Js, FireBase, Bootstrap, MongoDb, NodeJs,Express Js, GitHub, Heoku",
      link: "https://go-tour-eebdc.web.app",
      client: "https://github.com/ShazidNawasShovon/tourism-client-site",
      server: "https://github.com/ShazidNawasShovon/tourism-server-site",
    },
    {
      id: 3,
      name: "Medi-Ambulance",
      details:
        "Patient care begins with the right care at the right time with the right medical transport.We pay strict attention to detail and make all the arrangements required for each patient’s transfer so that our clients, caregivers, and family members have peace of mind. Our team has a great sense of urgency and work diligently to solve any of your patient medical transportation challenges.Ambulance transportation is our passion; We think outside the box by continuously improving ways to manage healthcare transportation properly. Whether you have a MICU critical patient transport or a routine schedule patient’s discharge, we are steadfastly patient focused and customer-centered.",
      feature: `We are providing Ambulance Services
                We have both Ground & Air Services
                We will reach your location in no time
                You contact us in any time by signing in to our site.
                We have Live support services & many other things.
                We have top Team members & top Drivers in your services.`,
      img1: "https://i.ibb.co/mRWFB4f/img7.png",
      img2: "https://i.ibb.co/XxcQsXF/img6.png",
      img3: "https://i.ibb.co/thkzCP6/img8.png",
      Technologies: " React Js, FireBase, Bootstrap, GitHub, Heoku",
      link: "https://medi-ambulance-a3d41.web.app/",
      client: "https://github.com/ShazidNawasShovon/Medi-Ambulance",
      server: "Not Used",
    },
  ];

  useEffect(() => {
    AOS.init();
  });
  console.log();
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
                <NavLink
                  variant="outline-dark"
                  to={`/DetailProject/${data[0].id}`}
                  className="project__btn mt-3"
                >
                  Details
                </NavLink>
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
                <NavLink
                  variant="outline-dark"
                  to={`/DetailProject/${data[1].id}`}
                  className="project__btn mt-3"
                >
                  Details
                </NavLink>
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
                <NavLink
                  variant="outline-dark"
                  to={`/DetailProject/${data[2].id}`}
                  className="project__btn mt-3"
                >
                  Details
                </NavLink>
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
