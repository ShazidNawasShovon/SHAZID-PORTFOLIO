import React, { useEffect } from "react";
import "./Contact.css";
import contactImg from "../img/shazid-bg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
function Contact() {
  useEffect(() => {
    AOS.init();
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tha1hr7",
        "template_8brhn8n",
        e.target,
        "user_yFYQyLOKfzuUOHMRAMEgO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Email successfully send !");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact component__space" id="Contact">
      <div
        className="row"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div
          className="col__2"
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available On Email. Connect with me via Mobile:
              </p>
              <p className="hire__text white">
                <strong>+880 1916-406215</strong> or email{" "}
                <strong>shazid15-12929@diu.edu.bd</strong>
              </p>
            </div>
            <div className="input__box">
              <form action="" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="fullName"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="text"
                  name="email"
                  className="contact email"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  name="phone"
                  className="contact number"
                  placeholder="Your Number *"
                />

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="col__2"
          data-aos="zoom-out-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={contactImg}
            alt=""
            className="contact__img  my-auto py-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
