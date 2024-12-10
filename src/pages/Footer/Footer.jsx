import React from 'react';
import './Footer.css'; // Import a CSS file for styling
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
 FaInstagram,
 FaEnvelopeOpen,
  FaPhoneSquareAlt,

} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-top">
      <img src={logo} className='logo'/>
      <h1 style={{color:'white'}}>AutumnDigi</h1>
      
      <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Provident fugit quia optio <br />voluptas, dolores, temporibus vero similique<br /> laudantium, impedit perferendis voluptatem iste.<br /> Cupiditate consequatur culpa, iusto<br /> veniam suscipit eum aperiam.</p>
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
              <FaTwitter />
            </a>

            <a href="https://instagram.com" className="contact__social-link">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        
      </div>
      <div className="footer-bottom row">
        <div className="footer-column ">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Download</a></li>
            <li><a href="#">Nitro</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Newsroom</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">College</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Streamkit</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Official 3rd Party Merch</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Acknowledgements</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Company Information</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
