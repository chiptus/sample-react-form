// * Create a form with an textbox and a button for the user.
// * The textbox is required and accepts a password
// * The button takes the user to the next screen after requirement validation and saving.
import React from 'react';
import PropTypes from 'prop-types';

import { FormLayout } from '../form-layout';

import stylesheet from './password-form.css';
console.log(stylesheet);
export class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      password: props.initialValue,
      failedRequirement: 0,
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
    this.setState({ error: '', failedRequirement: 0 });
    if (!password) {
      this.setState({ error: errors.REQUIRED });
      return;
    }
    const { success: isPasswordStrong, reason: failedRequirement } = isStrong(password);
    if (!isPasswordStrong) {
      this.setState({
        error: errors.NOT_STRONG,
        failedRequirement,
      });
      return;
    }
    this.props.onSubmit(password);
  }

  render() {
    const { error, password, failedRequirement } = this.state;
    return (
      <FormLayout currentStep={2} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">Please choose a password</label>
          <div className="input">
            <input type="password" name="password" value={password} onChange={this.onChange} />
          </div>
          <div className="errors">{error}</div>
          <ul className={stylesheet.requirements}>
            <li className={failedRequirement === REQUIREMENTS.LENGTH ? stylesheet.active : ''}>Must be at least 8 characters</li>
            <li className={failedRequirement === REQUIREMENTS.ILLEGAL_CHAR ? stylesheet.active : ''}>
              Must have letters, numbers, and symbols !@#$%^&*() only
            </li>
            <li className={failedRequirement === REQUIREMENTS.DOUBLE ? stylesheet.active : ''}>
              Must not allow two characters to repeat more than twice in a row
            </li>
            <li className={failedRequirement === REQUIREMENTS.UPPERCASE ? stylesheet.active : ''}>Must have one or more uppercase letters</li>
          </ul>
        </div>
      </FormLayout>
    );
  }
}

PasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
};

function isStrong(password) {
  if (password.length < 8) {
    return { success: false, reason: REQUIREMENTS.LENGTH };
  }

  if (containsIlegalChar(password)) {
    return { success: false, reason: REQUIREMENTS.ILLEGAL_CHAR };
  }

  if (containsTwoCharsInARow(password)) {
    return { success: false, reason: REQUIREMENTS.DOUBLE };
  }

  if (!containsUppercaseLetters(password)) {
    return { success: false, reason: REQUIREMENTS.UPPERCASE };
  }
  return { success: true };
}

function containsIlegalChar(string) {
  return /[^\w\d!@#$%^&*()]/.test(string);
}

function containsTwoCharsInARow(string) {
  return /(.)\1+/.test(string);
}

function containsUppercaseLetters(string) {
  return /[A-Z]/.test(string);
}

const errors = {
  REQUIRED: 'Password is required',
  NOT_STRONG: 'Password is not strong enough',
};

const REQUIREMENTS = {
  LENGTH: 1,
  ILLEGAL_CHAR: 2,
  DOUBLE: 3,
  UPPERCASE: 4,
};
