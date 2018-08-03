import React from 'react';
import PropTypes from 'prop-types';

import FormLayout from '../form-layout';

export class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.initialValue,
      error: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.initialValue === state.email) {
      return null;
    }
    return { email: props.initialValue };
  }

  async onSubmit() {
    console.log('calling on submit');
    const { error } = await this.props.onSubmit(this.state.email);
    if (error) {
      this.setState({ error });
    }
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
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

EmailForm.propTypes = {
  initialValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
