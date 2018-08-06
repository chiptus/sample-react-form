// * Create a form with a selectbox and a button for the user.
// * The selectbox is a list of timezones
// * The timezone names are available using 'tz-ids' library provided for you
// * The button saves to the database using a GraphQL mutation
import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_USER } from '../mutation';
import { TimezoneForm } from '../components/timezone-form';
import {
  getLocalState,
  clearLocalState,
} from '../lib/local-storage';

export class TimezoneScreen extends React.Component {
  render() {
    const { timezone } = getLocalState();
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { data }) => (
          <TimezoneForm
            initialValue={timezone}
            onSubmit={async timeZone => {
              const { email, password } = getLocalState();

              // save user in database
              await addUser({
                variables: {
                  user: { email, password, timeZone },
                },
              });
              clearLocalState();
              // go to confirmation
              this.props.history.push('/confirmation', {
                email,
              });
            }}
          />
        )}
      </Mutation>
    );
  }
}
