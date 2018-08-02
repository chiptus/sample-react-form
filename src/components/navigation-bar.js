import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import stylesheet from "./navigation-bar.css";

const Steps = ({ currentStep }) => (
  <div className={stylesheet.navigationBar}>
    <NavLink disabled={currentStep === 1} to={`/step${currentStep - 1}`}>
      Prev
    </NavLink>

    <NavLink disabled={currentStep === 3} to={`/step${currentStep + 1}`}>
      Next
    </NavLink>
  </div>
);

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired
};

export default Steps;
