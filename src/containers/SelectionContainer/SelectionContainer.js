import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { CarboniteOverlay } from 'carbonite';

const fadeIn = () => {
  return keyframes`
		from {
			bottom: -150px;
		}
		to {
			bottom: 0px;
		}
 `;
}

const SelectionWrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20%;
	width:70%
	height: 500px;
	display: flex;
	margin: 0px;
	padding: 0px;
  border-sizing: border-box;
  border: 2px solid ${props => props.theme.color.primary};
  box-shadow: ${props => props.theme.shadow.primary};
`;

// const ViewControls = styled.div`
// 	width:100%;
// 	height: 150px;
// 	position: fixed;
// 	left: 0px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: flex-start;
// 	border-top: 2px solid ${props => props.theme.color.secondary};
// 	background: ${props => props.theme.color.primary};
// 	box-shadow: ${props => props.theme.shadow.secondary};

// 	animation-duration: ${props => props.transitionDuration}ms;
// 	animation-delay: ${props => props.transitionDelay}ms;
// 	animation-fill-mode: ${props => props.transitionFill};
// 	animation-iteration-count: ${props => props.transitionCount};
// 	animation-timing-function: ease-in-out;

// 	bottom: -150px;
// 	${props => props.transition && `
// 		bottom: 0px;
// 	`};
// `;

const ViewContent = styled.div`
  padding:10px;
  background: white;
`;

const ViewControlsTop = styled.div`
	display: flex;
	align-items:flex-start;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	margin:0 auto;
`;

class SelectionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.openControls = this.openControls.bind(this);
		this.close = this.close.bind(this);
	}

	openControls() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	close() {
		this.setState({
			isOpen: false,
		});
	}

	render() {
		return (
			<SelectionWrapper>
        <ViewControlsTop>
          Close
        </ViewControlsTop>
        <ViewContent>
          Content
        </ViewContent>
				<CarboniteOverlay
					onPress={this.close}
					active={this.state.isOpen || this.state.isOpen}
				/>
			</SelectionWrapper>
		);
	}
}

SelectionContainer.PropTypes = {
	// view: PropTypes.object,
};

export default SelectionContainer;
