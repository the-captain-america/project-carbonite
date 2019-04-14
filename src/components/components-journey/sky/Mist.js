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

const MistContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Mist = styled.div`
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

const Mist = ({ fillColour }) => {
	
	const svg = {
		fillColour: `${fillColour}`,
		width: 500,
		height: 500
	};

	return (
		<MistContainer>
			<Mist>
				<svg
					className='logo'
					viewBox={`0 0 ${svg.width} ${svg.height}`}
					height={'150px'}
					width={'190px'}>
				<path />
				</svg>
			</Mist>
		</MistContainer>
	);
}

export default Mist;