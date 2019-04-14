import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CarboniteText } from 'carbonite';

const theme = {
  primary: '#ff7058', // light orange
  secondary: '#f1543f', // dark orange
  tertiary: '#ffd2bc', //light red
  quaternary: '#b34009', //dark red
};

const Container = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const Error = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin-top: 50px;
  width:100%;
  padding:15px;
  border: 2px solid ${theme.quaternary};
  background: ${theme.tertiary};
`;

const NotFound = ({ location }) => (
  <Container>
    <Error>
      <CarboniteText family={'default'} variant={'secondary'} bold>
        No match for <code>{location.pathname}</code>
      </CarboniteText>
    </Error>
  </Container>
);

NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFound;
