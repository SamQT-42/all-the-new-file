import React from 'react';
import Scoreboard from "../components/Scoreboard";

  function RIKT() {
  return (  
    <section>
      {/* Scoreboard Component (Uncomment if needed) */}
      {/* <Scoreboard /> */}

      {/* About Us Section */}
      <div className="event-section">
        <h1 className="event-title">RMIT Ichigeki Kendo Tournament</h1>

        {/* First Image & Description */}
        <div className="image-container">
          <img src="/your-image1.png" alt="Kendo Tournament" className="main-image" />
          <div className="text-overlay">
            <div className="about-label">
              <span>About the event</span>
            </div>
            <p className="overlay-text">
              Hosted by RMIT Shinsei Kendo Club, the RMIT Ichigeki Kendo Tournament aims to create opportunities for young kendokas to compete, improve their skills, and strengthen the Kendo community in Ho Chi Minh City.
            </p>
          </div>
        </div>

        {/* Second Image & Event Information */}
        <div className="image-container">
          <img src="/your-image2.png" alt="Tournament Venue" className="main-image" />
          <div className="text-overlay">
            <div className="about-label">
              <span>Event Information</span>
            </div>
            <p><strong>Date</strong><br />May 30 - June 1st 2025</p>
            <p><strong>Time</strong><br />8:00 AM - 5:00 PM</p>
            <p><strong>Venue</strong><br />RMIT University Saigon South Campus - Sports Hall<br />702 Nguyen Van Linh, Q7</p>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default RIKT;
