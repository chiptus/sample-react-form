// * Create a form with an textbox and a button for the user.
// * The textbox accepts an email address.
// * The button takes the user to the next screen after validation and saving.
// * Ensure the input is an email address.
// * Ensure the email address is not in use by querying the GraphQL server.
import React from 'react';

import FormLayout from '../components/form-layout';

const errors = {
  REQUIRED: 'Email is required',
  INVALID: 'Input is not a valid email',
  IN_USE: 'Email is in use',
};

function isValidAddress(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

class EmailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { email } = this.state;
    this.setState({ error: null });
    if (!email) {
      this.setState({ error: errors.REQUIRED });
      console.log('required');
      return;
    }
    if (!isValidAddress(email)) {
      this.setState({ error: errors.INVALID });
      return;
    }
    if (this.isEmailExists(email)) {
      this.setState({ error: errors.IN_USE });
      return;
    }
    // move to next step and save address
  }

  isEmailExists(email) {
    return true;
  }

  render() {
    const { email, error } = this.state;
    return (
      <FormLayout currentStep={1} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">
            Please enter your email address
          </label>
          <div className="input">
            <input
              value={email}
              type="email"
              required
              name="email"
              onChange={this.onChange}
            />
          </div>
          {error && <div className="errors">{error}</div>}
        </div>
      </FormLayout>
    );
  }
}

EmailScreen.propTypes = {};
export default EmailScreen;
