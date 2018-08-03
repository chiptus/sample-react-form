// * Create a form with an textbox and a button for the user.
// * The textbox accepts an email address.
// * The button takes the user to the next screen after validation and saving.
// * Ensure the input is an email address.
// * Ensure the email address is not in use by querying the GraphQL server.
import React from 'react';
import { ApolloConsumer, Query, Mutation } from 'react-apollo';

import {
  getLocalState,
  saveEmail,
  saveStep,
} from '../lib/local-storage';
import { EmailForm } from '../components/email-form';
import { IS_USER_EXISTS } from '../query';
const errors = {
  REQUIRED: 'Email is required',
  INVALID: 'Input is not a valid email',
  IN_USE: 'Email is in use',
};

function isValidAddress(email) {
  // taken from http://emailregex.com/
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

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(email) {
    if (!email) {
      return { error: errors.REQUIRED };
    }
    if (!isValidAddress(email)) {
      return { error: errors.INVALID };
    }
    if (await this.isEmailExists(email)) {
      return { error: errors.IN_USE };
    }

    // save email and step
    this.saveEmail(email);
    this.nextStep();
    // move to next step

    return {};
  }

  nextStep() {
    saveStep(2);
    this.props.history.push('/step2');
  }

  saveEmail(email) {
    saveEmail(email);
  }

  render() {
    const { email = '' } = getLocalState();
    return (
      <ApolloConsumer>
        {client => {
          // to make the function available in onSubmit
          // this is a code smell but it works
          this.isEmailExists = buildIsUserExistsFunction(client);
          return (
            <EmailForm
              initialValue={email}
              onSubmit={this.onSubmit}
            />
          );
        }}
      </ApolloConsumer>
    );
  }
}

function buildIsUserExistsFunction(client) {
  return async function isEmailExists(email) {
    const {
      data: { stukentUsers },
    } = await client.query({
      query: IS_USER_EXISTS,
      variables: { email },
    });
    return !!(stukentUsers && stukentUsers.length);
  };
}

EmailScreen.propTypes = {};
export default EmailScreen;
