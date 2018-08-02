import React from "react";

import NavigationBar from "./navigation-bar";
import ProgressBar from "./progress-bar";

import "./form-layout.css";

export default ({ children, currentStep }) => (
  <form className="form-layout">
    <ProgressBar currentStep={currentStep} />
    {children}
    <NavigationBar currentStep={currentStep} />
  </form>
);
