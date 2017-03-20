import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotReadyPage from 'containers/NotReadyPage';
import { Layout } from 'components';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/wedding-panel" component={HomePage} />
          <Redirect from="*" to="/wedding-panel" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
