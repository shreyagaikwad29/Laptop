import React from 'react';
import './Features.css'; // CSS for styling
import { BsSpeedometer2 } from "react-icons/bs";
import { IoIosAnalytics, IoIosBookmarks, IoIosBarcode } from "react-icons/io";

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">FEATURES</h2>
      <p className="section-subtitle">You can find the following features with AG</p>
      <div className="features-container">
        <div className="feature-item ">
          <div className="feature-icon">
          <IoIosAnalytics />
          </div>
          <div className="text">
            <h3>Movement Tracking</h3>
            <p>Tracks the status of Inward and Outward of mails movements</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
          <IoIosBookmarks />
          </div>
          <div className="text">
            <h3>Logs and History</h3>
            <p>Provides logs and history of movement for future reference</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
          <BsSpeedometer2 />
          </div>
          <div className="text">
            <h3>Manages the flow of records and inventory</h3>
            <p>
              It manages flow of records and inventory systematically and effectively,
              which helps Government and Organisations in Governance compliances.
            </p>
          </div>
          
        </div>
        <div className="feature-item">
          <div className="feature-icon">
          <IoIosBarcode />
          </div>
          <div className="text">
            <h3>Effective Decision Making</h3>
            <p>
              iWOW offers online tracking and fast location information which helps
              organisation on making effective and faster decision making process by
              providing real-time status of important documents and mails.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
