import styled, { keyframes } from "styled-components";

const pulse = () => {
  return keyframes`
	0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.25);
		}
		50% {
			transform: scale(1.5);
		}
		75% {
			transform: scale(1.25);
		}
		100% {
			transform: scale(1);
		}
 `;
}
export const PulseContainer = styled.div`
position:relative;
width:25px;
height:25px;
display:flex;
align-items:center;
align-self: flex-end;
`;

export const PulseItem = styled.span`
	position:absolute;
	width: 18px;
  height: 18px;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: rgba(203,25,44,1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.23);

  cursor:pointer;
  font-size:10px;
  text-align:center;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;

	${props => props.transition && `
		animation-name: ${pulse(props)};
		animation-duration: ${props.transitionDuration}ms;
		animation-delay: ${props.transitionDelay}ms;
		animation-fill-mode: ${props.transitionFillMode};
    animation-iteration-count: ${props.transitionIterationCount};
		animation-timing-function: ease-out;
	`}
  svg > #saved > path {
    // stroke: red;
  }
`;

// export const IncrementButton = styled.button`
//   padding:15px 10px;
//   text-decoration:none;
//   color:white;
//   border: none;
//   border-radius: 4px;
//   display: flex;
//   align-self: center;
//   color: white;
//   background: #cb192c;
//   transition: all 0.2s ease-in-out;
//   outline: none;
//   border-bottom:4px solid #af1728;
//   border-radius:2px;
//   transition: background-color 250ms ease-out;
//   position:absolute;
//   top: 0px;
//   cursor: pointer;
//   &:hover {
//     background: #af1728;
//     cursor: pointer;
//   }
//   &:active {
//     background:#cb192c;
//     border-width:2px;
//     top:2px;
//   }

//   &:focus {
//     outline: 0;
//   }
// `;


// const moveNumber = (props) => {
//   return keyframes`
// 	  from {
// 			top: ${props => props.originPosition};
// 		}
//     to {
//       top: ${props => props.finalPosition};
//     }
//   `;
// }
      