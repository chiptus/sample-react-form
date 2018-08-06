import React from 'react';

import { PasswordForm } from '../components/password-form';

import {
  getLocalState,
  savePassword,
  saveStep,
} from '../lib/local-storage';

export class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(password) {
    savePassword(password);
    this.nextStep();
  }

  nextStep() {
    saveStep(3);
    this.props.history.push('/step3');
  }

  render() {
    const { password = '' } = getLocalState();
    return (
      <PasswordForm
        initialValue={password}
        onSubmit={this.onSubmit}
      />
    );
  }
}
