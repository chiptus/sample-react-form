// * Create a form with an textbox and a button for the user.
// * The textbox is required and accepts a password
// * The button takes the user to the next screen after requirement validation and saving.
import React from 'react';

import FormLayout from '../form-layout';

const errors = {
  REQUIRED: 'Password is required',
  NOT_STRONG: 'Password is not strong enough',
};

export class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      password: 'asdasd',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.initialValue === state.password) {
      return null;
    }
    return { password: props.initialValue };
  }

  onSubmit() {
    const { password } = this.state;
    if (!password) {
      this.setState({ error: errors.REQUIRED });
      return;
    }
    if (!isStrong(password)) {
      this.setState({ error: errors.NOT_STRONG });
      return;
    }
    this.props.onSubmit();
  }

  render() {
    const { error, password } = this.state;
    return (
      <FormLayout currentStep={2} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">Please choose a password</label>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          {error && <div className="errors">{error}</div>}
          <div className="requirements">
            Must be at least 8 characters<br />
            Must have letters, numbers, and symbols only<br />
            Must not allow two characters to repeat more than twice
            in a row<br />
            Must have one or more uppercase letters<br />
          </div>
        </div>
      </FormLayout>
    );
  }
}

function isStrong(password) {
  if (password.length < 8) {
    return false;
  }

  // if (containsIlegalChar(password)) {
  //   return false;
  // }

  if (containsTwoCharsInARow(password)) {
    console.log('two characters');
    return false;
  }

  if (!containsUppercaseLetters(password)) {
    console.log('upper case');
    return false;
  }
  return true;
}

function containsIlegalChar(string) {}

function containsTwoCharsInARow(string) {
  return /(.)\1+/.test(string);
}

function containsUppercaseLetters(string) {
  return /[A-Z]/.test(string);
}
