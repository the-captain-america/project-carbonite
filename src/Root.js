import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  AppContainer,
  WrapContainer,
  ViewContainer,
  LoginContainer,
  IntroContainer,
} from 'containers';
import { NotFound, About } from 'pages';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <WrapContainer>
        <Switch>
          <Route path="/" exact={true} component={AppContainer} />
          <Route path="/home" component={IntroContainer} />
          <Route path="/journey" component={ViewContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </WrapContainer>
    </Router>
  </Provider>
);

export default Root;