import React from 'react';
import PropTypes from 'prop-types';
import {
  Match,
  Redirect,
} from 'react-router-dom';

const MatchWhenAuthorised = ({ component: Component, isAuthenticated, ...rest }) => (
  <Match
    {...rest}
    render={renderProps => (
      isAuthenticated() ? (
        <Component {...renderProps} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: renderProps.location },
        }}
        />
      )
    )}
  />
);

MatchWhenAuthorised.propTypes = {
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.func.isRequired,
};

export default MatchWhenAuthorised;
