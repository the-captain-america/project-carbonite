import React from 'react';
import styled, { keyframes } from 'styled-components';

const theme = {
  primary: '#ff7058',
  secondary: '#f1543f',
  light: '#c7c7c7',
  underTone: '#ffcbb2',
};

const ToggleOn = () => {
  return keyframes`
	0% {
    height: 25px;
    left: 0px;
    background: ${theme.primary};
  }
  100% {
    height: 25px;
    left: 25px;
    background: ${theme.secondary};
  }
 `
};

const ToggleOff = () => {
  return keyframes`
	0% {
    height: 25px;
    left: 25px;
    background: ${theme.primary};
  }
  100% {
    height: 25px;
    left: 0px;
    background: ${theme.secondary};
  }
`
};

const ToggleContainer = styled.div`
  position: relative;
  /* width: 200px;
  margin: 100px; */
  height: 25px;
  width: 50px;
  /* temp */
  margin: 100px;
  border-radius: 50px;
  background: ${theme.underTone};
  transition: 0.15s background ease-out;
`;

const Toggle = styled.div`
  position: absolute;
  left: 25px;
  top: 0px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: transform .15s;
  transform: scale(1);
  &:hover {
    transform: scale(1.25);
  }
  box-shadow: 0 8px 20px 0 rgba(0,0,0,0.25);
  cursor: pointer;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-duration: .1s;
  &.-inactive {
    background-color: ${theme.primary};
    animation-name: ${ToggleOff};
  }
  &.-active {
    background-color: ${theme.secondary};
    animation-name: ${ToggleOn};
  }
`;

const CarboniteToggle = ({ onPress, isActive }) => {
  let className;
  if (isActive) {
    className = ' -active';
  } else {
    className = ' -inactive';
  }
  return (
  <ToggleContainer onClick={onPress}>
    <Toggle className={className} />
  </ToggleContainer>
  );
}

export default CarboniteToggle;
