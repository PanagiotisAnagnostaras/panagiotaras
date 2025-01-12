import React from "react";
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-event">
          <div className="event-year">8/2023-now</div>
          <div className="event-description">
            <h1>Robotics software engineer</h1>
            <h2>Kemaro AG</h2>
            <h3>Eschlikon Switzerland</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">11/2021-7/2022</div>
          <div className="event-description">
            <h1>Research and Development Intern</h1>
            <h2>Hitachi Energy</h2>
            <h3>Zurich Switzerland</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">9/2020-5/2023</div>
          <div className="event-description">
            <h1>Master of Science: Robotics, Systems and Control</h1>
            <h3>ETH Zurich</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">7/2018-9/2018</div>
          <div className="event-description">
            <h1>Mechanical Engineer Intern</h1>
            <h2>Karelia Tobacco Company</h2>
            <h3>Kalamata, Greece</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">9/2014-9/2019</div>
          <div className="event-description">
            <h1>Diploma in Mechanical Engineering</h1>
            <h3>AUTH Greece</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
