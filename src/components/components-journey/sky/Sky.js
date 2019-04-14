import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveCloud = () => {
  return keyframes`
	0% {
			transform: transition(-20px 0);
		}
		25% {
			transform: transition(-50px, 0);
		}
		50% {
			transform: transition(-60px, 0);
		}
		75% {
			transform: transition(-50px, 0);
		}
		100% {
			transform: tranistion(-20px, 0);
		}
 `;
}

const CloudContainer = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Cloud = styled.div`
	position: absolute;
	animation-transition: all;
	animation-iteration-count: infinite;
	animation-name: ${moveCloud};
	animation-duration: 2s;
	animation-direction: alternate;
	animation-fill-mode: forwards;
	animation-delay: 1s;
	animation-timing-function: ease-in-out;
`;

const Sky = ({ fillColour }) => {
	
	const svg = {
		fillColour: `${fillColour}`,
		width: 500,
		height: 230
	};

	return (
		<CloudContainer>
			{/* <Cloud>
				<svg
					className='logo'
					viewBox={`0 0 ${svg.width} ${svg.height}`}
					height={'150px'}
					width={'190px'}>
					<path style={{ fill: `${svg.fillColour}` }} d="M33.6,230.5h147.5h232.5c44.9,0,81.4-36.4,81.4-81.4c0-44.9-36.4-81.4-81.4-81.4c-7.1,0-14,0.9-20.5,2.6
					C390.4,31.1,357.6,0,317.6,0c-21.3,0-40.5,8.8-54.2,22.9C249.6,8.8,230.4,0,209.1,0c-32.7,0-60.5,20.7-71.1,49.7
					c-9.7-2.9-20-4.5-30.6-4.5C48.1,45.2,0,93.3,0,152.6C0,183.3,12.9,211,33.6,230.5z"/>
				</svg>
			</Cloud> */}
		</CloudContainer>
	);
}

export default Sky;