import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import stylesheet from './navigation-bar.css';

const Steps = ({ currentStep, onSubmit }) => (
  <div className={stylesheet.navigationBar}>
    <button
      className={stylesheet.button}
      disabled={currentStep === 1}
      type="button"
      to={`/step${currentStep - 1}`}>
      <i className="fa fa-arrow-left" />
    </button>

    <button
      disabled={currentStep === 3}
      className={stylesheet.button}
      onClick={onSubmit}
      type="button"
      to={`/step${currentStep + 1}`}>
      <i className="fa fa-arrow-right" />
    </button>
  </div>
);

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Steps;
