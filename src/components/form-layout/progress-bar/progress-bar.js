import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from './progress-bar.css';

export const ProgressBar = ({ currentStep }) => (
  <div>
    <ul className={stylesheet.steps}>
      <li className={`${stylesheet.step} ${currentStep === 1 ? stylesheet.active : ''}`}>Step 1</li>
      <li className={`${stylesheet.step} ${currentStep === 2 ? stylesheet.active : ''}`}>Step 2</li>
      <li className={`${stylesheet.step} ${currentStep === 3 ? stylesheet.active : ''}`}>Step 3</li>
    </ul>
    <div className={`${stylesheet.bar} ${stylesheet.bar}${((currentStep - 1) / 2) * 100}`} />
  </div>
);

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
