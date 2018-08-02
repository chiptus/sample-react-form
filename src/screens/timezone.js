// * Create a form with a selectbox and a button for the user.
// * The selectbox is a list of timezones
// * The timezone names are available using 'tz-ids' library provided for you
// * The button saves to the database using a GraphQL mutation
import React from "react";

import FormLayout from "../components/form-layout";

export default () => (
  <FormLayout currentStep={3} StepTimezoneScreen>
    Timezone
  </FormLayout>
);
