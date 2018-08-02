import React from 'react';

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

export default FormLayout;
