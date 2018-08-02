import React from "react";

import "./progress-bar.css";

const ProgresBar = ({ currentStep }) => (
  <div className="progress-bar">
    <div className={`step ${currentStep === 1 ? "active" : ""}`}>Step 1</div>
    <div className={`step ${currentStep === 2 ? "active" : ""}`}>Step 2</div>
    <div className={`step ${currentStep === 3 ? "active" : ""}`}>Step 3</div>
  </div>
);

export default ProgresBar;
