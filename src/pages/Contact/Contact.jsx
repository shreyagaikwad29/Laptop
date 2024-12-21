import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
const URL = "http://localhost:3010/api/form/contact";


const Contact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name] : value,
    })
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(URL, {
          method:"POST",
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
      });
      console.log("Contact form", response);

      if (response.ok) {
          alert("Message send successfully");
          setContact({ 
            name: "",
            email: "",
            subject: "",
            message: "" });  
          navigate("/contact"); 
      }else{
          alert("invalid credential");
          console.log("invalid credential")
      }
  } catch (error) {
      console.log(error);
  }

};
  return (
    <section className="contact_section"style={{color:'white'}}>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">shreyaagaikwad11@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">9988776655</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://Twitter.com" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>

            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="form__control"
                onChange={handleInput}
                autoComplete="off"
                value={contact.name}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="form__control"
                onChange={handleInput}
                autoComplete="off"
                value={contact.email}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                required
                placeholder="Your Subject"
                className="form__control"
                onChange={handleInput}
                autoComplete="off"
                value={contact.subject}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              required
              className="form__control textarea"
              onChange={handleInput}
              autoComplete="off"
              value={contact.message}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
