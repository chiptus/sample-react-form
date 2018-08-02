// * Create a form with an textbox and a button for the user.
// * The textbox is required and accepts a password
// * The button takes the user to the next screen after requirement validation and saving.
import React from 'react';

import FormLayout from '../components/form-layout';

export default () => (
  <FormLayout currentStep={2}>
    <div className="container">
      <label className="label">Please choose a password</label>
      <div className="input">
        <input type="password" />
      </div>
      <div className="errors">
        <div>Password is required</div>
        <div>Password is not strong enough</div>
      </div>
      <div className="requirements">
        Must be at least 8 characters<br />
        Must have letters, numbers, and symbols only<br />
        Must not allow two characters to repeat more than twice in
        a row<br />
        Must have one or more uppercase letters<br />
      </div>
    </div>
  </FormLayout>
);
