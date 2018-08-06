import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import stylesheet from './navigation-bar.css';

export const NavigationBar = ({ currentStep, onSubmit }) => (
  <div className={stylesheet.navigationBar}>
    {currentStep > 1 ? (
      <NavLink className={stylesheet.button} to={`/step${currentStep - 1}`}>
        <i className="fa fa-arrow-left" />
      </NavLink>
    ) : (
      <div />
    )}

    <button className={stylesheet.button} onClick={onSubmit} type="button">
      <i className="fa fa-arrow-right" />
    </button>
  </div>
);

NavigationBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
