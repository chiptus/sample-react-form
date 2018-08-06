// * Create a form with an textbox and a button for the user.
// * The textbox is required and accepts a password
// * The button takes the user to the next screen after requirement validation and saving.
import React from 'react';
import PropTypes from 'prop-types';

import { FormLayout } from '../form-layout';
import { REQUIREMENTS, errors, isStrong } from './helpers';

import stylesheet from './password-form.css';

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
    // clear error state
    this.setState({ error: '', failedRequirement: 0 });

    // password is required
    if (!password) {
      this.setState({ error: errors.REQUIRED });
      return;
    }

    // check password strength
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

  renderRequirements() {
    const { failedRequirement } = this.state;
    return (
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
    );
  }

  render() {
    const { error, password } = this.state;
    return (
      <FormLayout currentStep={2} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">Please choose a password</label>
          <div className="input">
            <input type="password" name="password" value={password} onChange={this.onChange} />
          </div>
          <div className="errors">{error}</div>
          {this.renderRequirements()}
        </div>
      </FormLayout>
    );
  }
}

PasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
};
