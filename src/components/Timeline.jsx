import React from "react";
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-event">
          <div className="event-year">8/2023-now</div>
          <div className="event-description">
            <h3>Robotics software engineer, Kemaro AG, Eschlikon Switzerland</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">11/2021-7/2022</div>
          <div className="event-description">
            <h3>Research and Development Intern, Hitachi Energy, Zurich Switzerland</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">9/2020-5/2023</div>
          <div className="event-description">
            <h3>Master of Science, Robotics, Systems and Control, ETH Zurich</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">7/2018-9/2018</div>
          <div className="event-description">
            <h3>Industrial Mechanical Engineer Intern, Karelia Tobacco Company, Kalamata, Greece</h3>
          </div>
        </div>

        <div className="timeline-event">
          <div className="event-year">9/2014-9/2019</div>
          <div className="event-description">
            <h3>Diploma in Mechanical Engineering, AUTH Greece</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
