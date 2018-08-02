import React from "react";

import Steps from "./steps";
import ProgressBar from "./progress-bar";

import "./form-layout.css";

export default ({ children, currentStep }) => (
  <form class="form-layout">
    <ProgressBar currentStep={currentStep} />
    {children}
    <Steps currentStep={currentStep} />
  </form>
);
