import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Routes
import GiveConsent from '@views/GiveConsent';
import Consents from '@views/Consents';

const Component = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/give-consent"/>
    </Route>
    <Route path="/give-consent">
      <GiveConsent />
    </Route>
    <Route path="/consents">
      <Consents />
    </Route>
  </Switch>
);
Component.displayName = 'Routes';

export default Component;
