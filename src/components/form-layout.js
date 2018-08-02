import React from "react";

import Steps from "./steps";
import ProgressBar from "./progress-bar";

export default ({ children, currentStep }) => (
  <form>
    <ProgressBar currentStep={currentStep} />
    {children}
    <Steps currentStep={currentStep} />
  </form>
);
