import React from 'react';
import './Footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="language-selector">
          <select name="language" id="language-select">
            <option value="en">English, USA</option>
            <option value="es">Spanish</option>
            {/* Add other languages here */}
          </select>
        </div>
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
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
