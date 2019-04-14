import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from 'style-utils';
import { boolStyle, detectIE } from 'helpers';

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ImgItem = styled.img`
	${media.mobile`
		background: inherit;
	`}
	${media.desktop`
    background: inherit;
	`}
	${boolStyle("isMinimal", "background: inherit")}  
`;

const ImgContainer = styled.div`
	${props => props.layout === "desktop" && `

	`};
	${props => props.layout === "mobile" && `
		
	`};
`;

const Loader = styled.div`
	background-color: transparent;
	border: 2px solid rgba(0, 0, 0, .4);
	border-top-color: transparent;
	border-left-color: transparent;
	border-radius: 150px;
	display: inline-block;
	width: 12px;
	height: 12px;
	margin-bottom: 3px;
	vertical-align: middle;
	animation: ${Spin} .5s infinite linear;

	border-width: 2px;
  width: 8px;
  height: 8px;
`;

class CarboniteImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgLoaded: false,
			isMinimal: true,
			isIE: false
		};
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}

	componentDidMount() {
		const version = detectIE();
		let isIE;
		if (version === false) {
			isIE = false;
		} else if (version >= 12) {
			isIE = true;
		} else {
			isIE = true;
		}
		this.setState({ isIE });
	}

	handleImageLoaded({ target: img }) {
		let isMinimal = true;
		if (img.width > img.height) {
			isMinimal = false;
		}
		this.setState({
			imgLoaded: true,
			isMinimal,
			dimensions: {
				height: img.width,
				width: img.height
			}
		});
	}

	render() {
		const { isIE, isMinimal, imgLoaded } = this.state;
		const { layout, imageKey } = this.props;
		return (
			<ImgContainer>
				{!imgLoaded ? (
					<ImgItem
						isIE={isIE}
						layout={layout}
						isMinimal={isMinimal}
						src={`${imageKey}`}
						alt={`item`}
						onLoad={this.handleImageLoaded}
					/>
				): (
					<Loader />
				)}
			</ImgContainer>
		);
	}
}
export default CarboniteImage;
