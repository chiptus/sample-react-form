import React from 'react';
import PropTypes from 'prop-types';

import { NavigationBar } from './navigation-bar';
import { ProgressBar } from './progress-bar';

import './form-layout.css';

export const FormLayout = ({
  children,
  currentStep,
  onSubmit,
}) => (
  <form className="formLayout" onSubmit={e => e.preventDefault()}>
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
