import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Steps = ({ currentStep }) => (
  <div>
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
