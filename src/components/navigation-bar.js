import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import stylesheet from './navigation-bar.css';

const Steps = ({ currentStep, onSubmit }) => (
  <div className={stylesheet.navigationBar}>
    <button
      disabled={currentStep === 1}
      type="button"
      to={`/step${currentStep - 1}`}>
      Prev
    </button>

    <button
      disabled={currentStep === 3}
      onClick={onSubmit}
      type="button"
      to={`/step${currentStep + 1}`}>
      Next
    </button>
  </div>
);

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Steps;
