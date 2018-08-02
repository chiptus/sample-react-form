import React from "react";

import Steps from "./steps";

export default ({ children, currentStep }) => (
  <form>
    {children}
    <Steps currentStep={currentStep} />
  </form>
);
