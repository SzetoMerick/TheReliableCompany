import React from "react";
import "./Section.css";
import Photo1 from "./photo1.jpg"; // Update the path
import Photo2 from "./photo2.jpg"; // Update the path

const Section = () => {
  return (
    <div className="section">
      <div className="box">
        <img className="box-photo" src={Photo1} alt="Photo 1" />
      </div>
      <div className="box">
        <h2 className="section-title">WE FIX WHAT WORRIES YOU</h2>
        <p className="section-description">
          Trusted Experts For Installing & Repairing Anything In Your Home
        </p>
        <p className="section-description">
          Multi-skilled craftsman in Bay Area
        </p>
        <button className="section-button">Book an Appointment</button>
      </div>
      <div className="box">
        <div className="box-info">
          <p className="section-info">
            You’ve come to the correct place if you’re having trouble finding
            enough time in the day to do the home improvement projects you’ve
            been dreaming of doing or if your “to-do” list is becoming longer by
            the day. Be sure to contact Precision Handyman of Bay Area when you
            require trustworthy, high-quality handyman services! The handyman
            and repair services you’ve been looking for can be delivered to you
            and your home by our crew, who is properly trained and prepared to
            do so.
          </p>
        </div>
      </div>
      <div className="box">
        <img className="box-photo" src={Photo2} alt="Photo 2" />
      </div>
      <div className="box">
        <p className="section-info">
          Here at Precision Handyman of Bay Area, we provide residents in Bay
          Area and beyond a comprehensive range of home remodeling, upkeep,
          repair, and enhancement services. With the appropriate equipment and
          expertise, you can be confident that your home renovation project will
          be completed correctly the first time.
        </p>

        <p className="section-info">
          We don’t like to criticize our rivals, but we have the best handyman
          prices in the Bay Area and have everything you need in one location!
          With only one phone call, we eliminate the headache! Now that you’ve
          found us, you may stop spending countless hours looking for a handyman
          for your repair or building maintenance jobs. We can provide you a
          price for any and all of your handyman projects with just one quick
          contact at (408) 617-5094.
          <h1 className="mission">
            Our Mission For a variety of home maintenance and repair services,
            turn to Precision Handyman. You may trust the highly qualified
            professionals of Precision Handyman to complete your project
            precisely the first time.
          </h1>
        </p>
      </div>
      <div className="box">
        <img className="box-photo" src={Photo2} alt="Photo 2" />
      </div>
    </div>
  );
};
export default Section;
