import React from "react";
import PropTypes from "prop-types";
import "./progress-bar.css";

const ProgresBar = ({ currentStep }) => (
  <div className="progress-bar">
    <ul className="steps">
      <li className={`step ${currentStep === 1 ? "active" : ""}`}>Step 1</li>
      <li className={`step ${currentStep === 2 ? "active" : ""}`}>Step 2</li>
      <li className={`step ${currentStep === 3 ? "active" : ""}`}>Step 3</li>
    </ul>
    <div className={`bar bar${((currentStep - 1) / 2) * 100}`} />
  </div>
);

ProgresBar.propTypes = {
  currentStep: PropTypes.number.isRequired
};

export default ProgresBar;
