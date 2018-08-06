import React from 'react';
import PropTypes from 'prop-types';
import TzIds from 'tz-ids';

import FormLayout from '../form-layout';

export class TimezoneForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeZone: props.initialValue,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  derivePropsFromState(props, state) {
    if (props.initialValue === state.timeZone) {
      return null;
    }
    return { timeZone: props.initialValue };
  }

  onSubmit() {
    this.props.onSubmit(this.state.timeZone);
  }

  onChange({ target: { name, value, ...target } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <FormLayout currentStep={3} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">
            Please choose your timezone
          </label>
          <div className="input">
            <select
              required
              name="timeZone"
              value={this.state.timeZone}
              onChange={this.onChange}>
              {TzIds.map(tz => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>
      </FormLayout>
    );
  }
}

TimezoneForm.propTypes = {
  initialValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
