import React from 'react';
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
} from './screens';

const Router = function Router({ step }) {
  //Put your routes inside the BrowserRouterStep
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/step1" component={EmailScreen} />
        <Route path="/step2" component={PasswordScreen} />
        <Route path="/step3" component={TimezoneScreen} />
        <Redirect exact from="/" to={`/step${step}`} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
