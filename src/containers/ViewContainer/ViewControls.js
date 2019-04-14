import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {
	CarboniteIcon,
	CarboniteToggle,
	CarboniteRotate,
// 	CarboniteOverlay,
// 	CarboniteModal,
} from 'carbonite';
import axios from "axios";
import ViewSidePanel from './ViewSidePanel';
//import Smoke from './Smoke';
// import ViewSettings from './ViewSettings';
// import SelectionContainer from '../SelectionContainer';
// import './styles/app.css';
// import { baseButton } from '../../components/carbonite-common';
// import PropTypes from 'prop-types';
// import $ from 'jquery';
// import Particles from '../../styles';

// const fadeIn = () => {
//   return keyframes`
// 		from {
// 			bottom: -50px;
// 		}
// 		to {
// 			bottom: 0px;
// 		}
//  `;
// }

// const Rotate = (props) => {
// 	return keyframes`
// 		0%  {
// 			transform: rotate(270deg);
// 		}
// 		100% {
// 			transform: rotate(${props.rotate}deg);
// 		}
// 	`;
// }

const theme = {
	primary: '#ff7058',
  secondary: '#f1543f',
	control: '#faf5e6',
	controlBorder: '#ede2c1',
	sideControl: '#faf5e6',
	sideBorder: '#ede2c1',
	white: '#ffffff',
	cloud: {
		primary: '#477ea8',
		secondary: '#9ecdf2',
		tertiary: '#c4e7fe',
		quaternary: '#d1effe'
	}
};


// const slideLeft = () => {
//   return keyframes`
// 	from {
// 		left: -250px;
// 	}
// 	to {
// 		left: 0px;
// 	}
//  `;
// };

// const Page = styled.div`
// 	background-color: #ffffff;
// 	background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%${props => props.svgFill}' fill-opacity='${props => props.svgOpacity}' fill-rule='evenodd'/%3E%3C/svg%3E");
// 	width:85%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

// const ViewWrapper = styled.div`
// background: rgb(0,32,90);
// background: -moz-linear-gradient(45deg, rgba(0,32,90,1) 0%, rgba(20,62,117,1) 100%);
// background: -webkit-linear-gradient(45deg, rgba(0,32,90,1) 0%,rgba(20,62,117,1) 100%);
// background: linear-gradient(45deg, rgba(0,32,90,1) 0%,rgba(20,62,117,1) 100%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00205a', endColorstr='#143e75',GradientType=1 );
	
// 	width:100%;
// 	position: absolute;
// 	top: 0px;
// 	left: 0px;
// 	height: 100%;
// 	min-width: 100%;
// 	min-width: 100%;
// 	margin: 0px;
// 	padding: 0px;
// 	box-sizing: border-box;
// `;

const Container = styled.div`
`;

// const TopRhombus = styled.div`
// 	display: fixed;
// 	margin: 0 auto;
// 	top: 0px;
// 	transform: rotate(180deg);
// 	border-bottom: 100px solid ${theme.primary};
// 	border-left: 50px solid transparent;
// 	border-right: 50px solid transparent;
// 	height: 0;
// 	width: 100px;
// `;

const ControlsContainer = styled.div`
	width:100%;
	height: 40px;
	position: fixed;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	/* fix styles to global */

	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23c7bc9c' fill-opacity='0.22' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	
	/* border-top: 2px solid ${props => props.theme.color.secondary};
	background: ${props => props.theme.color.primary}; */

	border-top: 2px solid ${theme.controlBorder};
	background-color: ${theme.control};

	box-shadow: ${props => props.theme.shadow.secondary};
	transition: all 0.2s ease-in-out;
	bottom: -40px;
	${props => props.transition && `
		bottom: 0px;
	`};
`;

	/* animation-duration: ${props => props.transitionDuration}ms;
	animation-delay: ${props => props.transitionDelay}ms;
	animation-fill-mode: ${props => props.transitionFill};
	animation-iteration-count: ${props => props.transitionCount}; 
	animation-timing-function: ease-in-out;
	*/
/* 
	${props => props.transition && `
		bottom: 0px;
	`}; */
/* `; */

// const CloudPrimary = styled.div`
// 	width: 150px;
// 	height:80px;

// `;

const ViewControlsTop = styled.div`
	display: flex;
	align-items:flex-start;
	justify-content: center;
	flex-direction: row;
`;

const ViewButton = styled.button`
padding:5px 20px;
left: 50px;
border-top-right-radius: 4px;
border-top-left-radius: 4px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
text-decoration:none;
position: absolute;
height:35px;
// top: -27px;
top: -37px;
color: white;
background: ${props => props.theme.color.primary};
transition: all 0.2s ease-in-out;
border: 0;
/* border-top: 2px solid ${props => props.theme.color.secondary};
border-right: 2px solid ${props => props.theme.color.secondary};
border-left: 2px solid ${props => props.theme.color.secondary}; */
border-bottom: 0;
outline: none;
cursor: pointer;
&:hover {
	background: ${props => props.theme.color.secondary};
	cursor: pointer;
}
&:active {
	background: ${props => props.theme.color.secondary};
	border-width:2px;
}
&:focus {
	outline: 0;
}
> span {
	//margin-left:10px;
}
`;

// const openSidePanel = () => {
//   return keyframes`
// 		0% {
// 			right: 0px;
// 		}
// 		100% {
// 			right: -250px;
// 		}
//  `;
// }

// const closeSidePanel = () => {
//   return keyframes`
// 	0% {
// 			right: -250px;
// 		}
// 		100% {
// 			right: 0px;
// 		}
//  `;
// }

const ViewSideTop = styled.div`
	position: relative;
	/* background: white; */
	/* width:100%; */
	padding: 10px;
`;

/* understand the box shadow model */
/**
 * First property is the horizontal length negative values go along the x-axis to the left and positive values push shadow towards the right
 * Second property is the vertical length positive is down negative is up
 * Third property is the blur radius
 * Fourth property is the spread --> this should match the width so should stay at 0
 */

class ViewControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isControlsOpen: true,
			isSidePanelOpen: false,
			isModalOpen: false,
			isToggleActive: false,
		};
		this.openControls = this.openControls.bind(this);
		this.handleSidePanel = this.handleSidePanel.bind(this);
		// this.close = this.close.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		// this.handleModal = this.handleModal.bind(this);
	}

	componentDidMount() {
		axios.get('/user?ID=12345')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	
	}

	openControls() {
		console.log('pressed');
		this.setState({
			isControlsOpen: !this.state.isControlsOpen
		}, this.checkState());
	}

	checkState() {
		console.log('valuse', this.state.isControlsOpen);
	}

	handleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSidePanel() {
		this.setState({
			isSidePanelOpen: !this.state.isSidePanelOpen
		});
		console.log('toggled');
	}

	close() {
		this.setState({
			isSidePanelOpen: false,
			isControlsOpen: false,
		});
	}

	handleToggle() {
		this.setState({
			isToggleActive: !this.state.isToggleActive,
		});
		console.log('toggle handle state', this.state.isToggleActive);
	}

	render() {

		return (
			<Container>
				<ControlsContainer
					transition={this.state.isControlsOpen}>
					<ViewSidePanel>
						<ViewSideTop>
							<CarboniteToggle
								onPress={this.handleToggle}
								isActive={this.state.isToggleActive}
							/>
						</ViewSideTop>
					</ViewSidePanel>
					<ViewControlsTop>
						<ViewButton
							onClick={this.openControls}
						>
						<CarboniteRotate rotateTo={this.state.isControlsOpen ? '90' : '270'}>
							<CarboniteIcon name="back" size={25} />
						</CarboniteRotate>
						</ViewButton>
					</ViewControlsTop>
				</ControlsContainer>

			</Container>
		);
	}
}

export default ViewControls;
