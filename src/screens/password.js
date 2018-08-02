// * Create a form with an textbox and a button for the user.
// * The textbox is required and accepts a password
// * The button takes the user to the next screen after requirement validation and saving.
import React from "react";

import FormLayout from "../components/form-layout";

export default () => <FormLayout currentStep={2}>Password</FormLayout>;
