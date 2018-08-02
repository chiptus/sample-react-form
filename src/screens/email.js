// * Create a form with an textbox and a button for the user.
// * The textbox accepts an email address.
// * The button takes the user to the next screen after validation and saving.
// * Ensure the input is an email address.
// * Ensure the email address is not in use by querying the GraphQL server.
import React from "react";

import FormLayout from "../components/form-layout";

export default () => (
  <FormLayout currentStep={1}>
    <div className="container">
      <label className="label">Please enter your email address</label>
      <div className="input">
        <input type="email" required />
      </div>
      <div className="errors">
        <div>Email is required</div>
        <div>Input is not a valid email</div>
        <div>Email is in use</div>
      </div>
    </div>
  </FormLayout>
);
