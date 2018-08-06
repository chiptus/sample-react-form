import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './navigation-bar';
import ProgressBar from './progress-bar';

import './form-layout.css';

const FormLayout = ({ children, currentStep, onSubmit }) => (
  <form className="formLayout">
    <ProgressBar currentStep={currentStep} />
    {children}
    <NavigationBar currentStep={currentStep} onSubmit={onSubmit} />
  </form>
);

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
  currentStep: PropTypes.oneOf([1, 2, 3]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormLayout;
