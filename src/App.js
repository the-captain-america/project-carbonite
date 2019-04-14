import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  AppContainer,
  WrapContainer,
  ViewContainer,
  IntroContainer,
} from './containers';
import { ProjectBookmark, ProjectInput } from 'projects';
import { NotFound, About } from 'pages';
import store from './store';
// import style from './styles/app.css'
import './styles/app.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <WrapContainer>
        <Switch>
          <Route path="/" exact={true} component={IntroContainer} />
          <Route path="/home" exact={true} component={IntroContainer} />
					<Route path="/journey" exact={true} component={ViewContainer} />
					<Route path="/project-input" component={ProjectInput} />
					<Route path="/project-bookmark" component={ProjectBookmark} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </WrapContainer>
    </Router>
  </Provider>
);

export default App;
