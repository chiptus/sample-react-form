import React from 'react';
import { Redirect } from 'react-router-dom';

export const ConfirmationScreen = ({
  location: {
    state: { email },
  },
}) =>
  email ? (
    console.log(email) || (
      <div>Account for {email} has been created</div>
    )
  ) : (
    <Redirect to="/step1" />
  );
