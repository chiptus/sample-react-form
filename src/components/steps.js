import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Steps = ({ currentStep }) => (
  <div>
    <NavLink disabled={currentStep == 1} to={`/step${currentStep - 1}`}>
      Prev
    </NavLink>
    <NavLink to="/step1">Step 1</NavLink>
    <NavLink to="/step2">Step 2</NavLink>
    <NavLink to="/step3">Step 3</NavLink>
    <NavLink to={`/step${currentStep + 1}`}>Next</NavLink>
  </div>
);

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired
};

export default Steps;
