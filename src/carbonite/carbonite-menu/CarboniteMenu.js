import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarboniteOverlay from '../carbonite-overlay';
import styled, { keyframes } from 'styled-components';
import { CarboniteText, CarboniteIcon } from 'carbonite';

const slideIn = () => {
  return keyframes`
	from {
		opacity: 0;
		right: -250px;
	}
	to {
		opacity: 1;
		right: 0px;
	}
 `;
}

const slideLeft = () => {
  return keyframes`
	from {
		// opacity: 0;
		left: -250px;
	}
	to {
		// opacity: 1;
		left: 0px;
	}
 `;
};

const fast = '0.3s';
const barW = 36;
const barO = barW /3.3;
const barH = 2;

const MenuButton = styled.button`
    display: inline-block;
		position: absolute;
		padding: 15px;
		border: none;
		background: ${props => props.theme.color.white};
		&:focus {
			outline: none;
		}
		&:hover {
			background: ${props => props.theme.color.white};
		}
    cursor: pointer;
    padding: 0;
`;

const Container = styled.div`
		position: fixed;
		box-shadow: none;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0px;
		right: -250px;
		width:250px;
		height: 100%;
		background: ${props => props.theme.color.secondary};
		${props => props.isActive && `
			animation-name: ${slideLeft};
			animation-duration: ${props => props.transitionDuration}ms;
			animation-delay: ${props => props.transitionDelay}ms;
			animation-fill-mode: ${props => props.transitionFill};
			animation-iteration-count: ${props => props.transitionCount};
		`}
`;


class CarboniteMenu extends Component {
  render() {
		const menu = (
			<MenuButton
				onClick={this.props.onPressMenu}
				isActive={this.props.isActive}>
				<CarboniteText size={12} variant="white">
					<CarboniteIcon name="menu" size={20} />
				</CarboniteText>
			</MenuButton>
		);

		const nav = (
			<Container
				isActive={this.props.isActive}
				transitionDuration={600}
				transitionDelay={200}
				transitionCount={1}
				transitionFill={'forwards'}
			>
        {menu}
      </Container>
		);
		
    return (
      <div>
        {nav}
        <CarboniteOverlay onPress={this.props.onPress} active={this.props.isActive} />
      </div>
    );
  }
}

// Menu.propTypes = {
//   height: PropTypes.string.isRequired,
// };

export default CarboniteMenu;
