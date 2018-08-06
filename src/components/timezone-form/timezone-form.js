import React from 'react';
import PropTypes from 'prop-types';
import TzIds from 'tz-ids';

import { FormLayout } from '../form-layout';

import stylesheet from './timezone-form.css';

export class TimezoneForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeZone: '',
      filter: '',
      error: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    const { timeZone } = this.state;
    if (!timeZone) {
      this.setState({ error: 'Timezone is required' });
      return;
    }
    this.setState({ error: '' });
    this.props.onSubmit(this.state.timeZone);
  }

  onChange({ target: { name, value, ...target } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { timeZone, filter, error } = this.state;
    return (
      <FormLayout currentStep={3} onSubmit={this.onSubmit}>
        <div className="container">
          <label className="label">Please choose your timezone</label>
          <div className={['input', stylesheet.input].join(' ')}>
            <input name="filter" onChange={this.onChange} value={filter} placeholder="Type here to filter the list" />
            <select required name="timeZone" value={timeZone} onChange={this.onChange}>
              <option value="" />
              {TzIds.filter(tz => tz.toLowerCase().includes(filter.toLowerCase())).map(tz => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
          <div className="errors">{error}</div>
        </div>
      </FormLayout>
    );
  }
}

TimezoneForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
