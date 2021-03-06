import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {
  EmailScreen,
  PasswordScreen,
  TimezoneScreen,
  ConfirmationScreen,
} from './screens';

const Router = function Router({ step }) {
  //Put your routes inside the BrowserRouterStep
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/step1" component={EmailScreen} />
        <Route path="/step2" component={PasswordScreen} />
        <Route path="/step3" component={TimezoneScreen} />
        <Route
          path="/confirmation"
          component={ConfirmationScreen}
        />
        <Redirect exact from="/" to={`/step${step}`} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Router;
