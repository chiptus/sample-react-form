import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const ConfirmationScreen = ({
  location: { state: { email } = {} },
}) =>
  email ? (
    <div>Account for {email} has been created</div>
  ) : (
    <Redirect to="/" />
  );

ConfirmationScreen.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};
