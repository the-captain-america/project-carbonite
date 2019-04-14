import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { CarboniteIcon, CarboniteText, CarboniteTrim } from 'carbonite';

const theme = {
	primary: '#ff7058',
  secondary: '#f1543f',
	control: '#faf5e6',
	controlBorder: '#ede2c1',
	sideControl: '#faf5e6',
	sideBorder: '#ede2c1',
  white: '#ffffff',
  lightTan: '#faf5e6',
  tan:'ede2c1',
  error: 'red',
  grey: 'rgba(0,0,0, 0.4)',
	cloud: {
		primary: '#477ea8',
		secondary: '#9ecdf2',
		tertiary: '#c4e7fe',
		quaternary: '#d1effe'
	}
};

const slideDown = () => {
  return keyframes`
	from {
		opacity: 0;
		bottom: -50px;
	}
	to {
		opacity: 1;
		bottom: 0px;
	}
 `;
};

const SnackbarContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-color: ${theme.primary};

  ${props => props.isActive && `
    animation-name: ${slideDown};
    animation-duration: 300ms;
    animation-delay: .2ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
	`}
`;

const SnackbarContent = styled.span`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SnackbarClose = styled.button`
  background-color: ${theme.primary}
  &:hover {
    background-color: ${theme.secondary};
  }
`;

class CarboniteSnackbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <SnackbarContainer isActive={this.state.isActive}>
        <SnackbarClose
          onClick={this.handleOpen}>
          <CarboniteIcon
            name="menu"
            size={20}
          />
        </SnackbarClose>

        <SnackbarContent>
          {this.props.text ? (
          <CarboniteText size={12} variant="white">
            <CarboniteTrim text={this.props.text} length={30} />
          </CarboniteText>
          ) : (
            <CarboniteText size={12} variant="white">
              Sorry there must an error
            </CarboniteText>
          )}
        </SnackbarContent>
      </SnackbarContainer>

    );
  }
}

export default CarboniteSnackbar;
