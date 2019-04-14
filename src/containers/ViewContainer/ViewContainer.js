import React, { Component } from 'react';
import ViewControls from './ViewControls';
import styled from 'styled-components';
import { Sky } from '../../components/components-journey';
import CreateContainer from '../CreateContainer';

const background = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/811583/lake.jpg`;

const Container = styled.div`
  width:100%;
  position: relative;
  height:100%;
`;

const ContainerImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  width: 100%;
  left: 0px;
  height: 100%;
`;

class ViewContainer extends Component {
  render() {
    return (
      <Container>
        <ContainerImage>
        <Sky />
        <CreateContainer />
        <ViewControls />
        </ContainerImage>
      </Container>
    );
  }
}

export default ViewContainer;