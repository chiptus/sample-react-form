// * Create a form with a selectbox and a button for the user.
// * The selectbox is a list of timezones
// * The timezone names are available using 'tz-ids' library provided for you
// * The button saves to the database using a GraphQL mutation
import React from "react";
import TzIds from "tz-ids";
import FormLayout from "../components/form-layout";

export default () => (
  <FormLayout currentStep={3} StepTimezoneScreen>
    <div>Please choose your timezone</div>
    <select required>
      {TzIds.map(tz => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  </FormLayout>
);
