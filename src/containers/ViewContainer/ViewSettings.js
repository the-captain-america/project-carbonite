import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { baseButton } from '../../components/carbonite-common';
import PropTypes from 'prop-types';

const flamePrimary = () => {
  return keyframes`
		0%{
			opacity:1;
			transform: rotate(0deg) scale(1.02) translateY(-1px);
		}
		20%{
			opacity:0.8;
			transform: rotate(-1deg) scale(1.01) translateY(-3px);
		}
		40%{
			opacity:0.8;
			transform: rotate(-2deg) scale(1.03) translateY(1px);
		}
		60%{
			opacity:0.9;
			transform: rotate(-1deg) scale(0.98) translateY(-2px);
		}
		80%{
			opacity:1;
			transform: rotate(1deg) scale(0.97) translateY(1px);
		}
		100%{
			opacity:1;
			transform: rotate(-1deg) scale(1) translateY(0px);
		}
 `;
}

const flameSecondary = () => {
  return keyframes`
		0%{
			opacity:1;
			transform: rotate(0deg) scale(0.98) translateY(1px);
		}
		20%{
			opacity:1;
			transform: rotate(2deg) scale(0.98) translateY(-3px);
		}
		40%{
			opacity:1;
			transform: rotate(-1deg) scale(1.01) translateY(-3px);
		}
		60%{
			opacity:0.8;
			transform: rotate(2deg) scale(0.96) translateY(0px);
		}
		80%{
			opacity:0.7;
			transform: rotate(-2deg) scale(1.02) translateY(2px);
		}
		100%{
			opacity:1;
			transform: rotate(1deg) scale(1.01) translateY(-1px);
		}
 `;
}

const flameTertiary = () => {
  return keyframes`
		0%{
			opacity:0.6;
			transform: rotate(0deg) scale(1.04) translateY(3px);
		}
		20%{
			opacity:1;
			transform: rotate(-2deg) scale(0.95) translateY(-2px);
		}
		40%{
			opacity:0.8;
			transform: rotate(1deg) scale(1.02) translateY(2px);
		}
		60%{
			opacity:0.8;
			transform: rotate(-1deg) scale(0.97) translateY(-3px);
		}
		80%{
			opacity:0.9;
			transform: rotate(2deg) scale(1.02) translateY(2px);
		}
		100%{
			opacity:1;
			transform: rotate(-1deg) scale(0.98) translateY(-2px);
		}
 `;
}



const ResourceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin:auto;
	position: relative;
`;

const Resource = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	display: flex;
	position: relative;
	top:-20px;

	backface-visibility: hidden;
	box-shadow: ${props => props.theme.shadow.tertiary};
	justify-content: center;
	align-items: center;
	background: rgba(255,255,255,0.4);
	//border: 1px solid #ffffff;
	transition: all 0.2s ease-in-out;
	transform: scale(1);
	&:hover{
		cursor: pointer;
		transform: scale(1.3);
		box-shadow: ${props => props.theme.shadow.quaternary};
	}
	svg {
    .flamePrimary{
			animation: ${flamePrimary} 0.3s infinite ease-in-out;
      transform-origin:right bottom;
    }
    .flameSecondary{
			animation: ${flameSecondary} 0.3s infinite ease-in-out;
      transform-origin:right bottom;
    }
    .flameTertiary{
			animation: ${flameTertiary} 0.3s infinite ease-in-out;
      transform-origin:right bottom;
    }
  }
`;

/**
 * http://www.heropatterns.com/ -- great repeating gradients
 */

// const ViewControls = baseButton.extend`
// border-top: 2px solid ${props => props.theme.color.light};
// `;

// const SettingsButton = styled.button`
// `;

// const SettingsTop = styled.div`
// `;

class ResourcePanel extends Component {

	render() {
		const svg = { width: 500, height: 400 };
		return (
			<ResourceContainer>
				<Resource>
					<svg
						className='logo'
						viewBox={`0 0 ${svg.width} ${svg.height}`}
						height={'150px'}
						width={'190px'}>
						<g className="flamePrimary">
							<path style={{ fill: '#E17A2D' }}  d="M186.141,168.802c18.63-48.445,15.042-121.667,15.042-121.667s49.541,20.759,83.744,77.761
							c32.149,53.578,1.777,133.398,1.777,133.398c23.685-23.693,32.464-47.382,33.268-75.827c26.608,42.473,47.165,91.146,47.165,140.398
							c0,60.938-55.412,110.285-123.837,110.318c-68.396-0.037-123.837-49.38-123.837-110.318
							C119.463,263.555,164.173,225.931,186.141,168.802z" />
						</g>
						<g className="flameSeconary">
							<path style={{ fill: '#FFC94A' }} d="M210.455,272.583c10.222-29.384,8.258-73.791,8.258-73.791s98.12,74.674,91.131,167.227
							c-2.791,36.856-30.424,66.888-68.01,66.91c-37.556-0.022-68.003-29.949-68.003-66.91
							C173.835,330.049,198.388,307.232,210.455,272.583z" />
						</g>
						<g className="flameTertiary">
							<path style={{ fill: '#FFECB1' }} d="M222.017,330.072c6.481-18.619,5.231-46.753,5.231-46.753s62.169,47.318,57.743,105.963
							c-1.77,23.349-19.278,42.372-43.09,42.39c-23.794-0.019-43.09-18.978-43.09-42.39C198.815,366.483,214.38,352.025,222.017,330.072z
							"/>
						</g>
					</svg>
				</Resource>
			</ResourceContainer>
		);
	}
}

export default ResourcePanel;