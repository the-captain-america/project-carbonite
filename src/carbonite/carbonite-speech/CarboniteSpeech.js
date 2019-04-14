import React from 'react';
import styled from 'styled-components';
import { CarboniteText } from 'carbonite';

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

const SpeechContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SpeechControls = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: space-around;
  align-self: flex-end;
`;

const Speech = styled.div`
  position: absolute;
  padding:15px;
  border: 2px solid ${theme.tan};
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23${props => props.fillColour}' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-color: ${theme.lightTan};
  background: white;
`;

const ButtonTheme = styled.button`
height: 22px;
display: flex;
transition: all 0.2s ease-in-out;
text-transform: uppercase;
justify-content: center;
vertical-align: middle;
align-items: center;
cursor: pointer;
border:none;
outline: none;
span {
  padding: 0px;
  line-height: 1.5;
}
&:hover {
  cursor:pointer;
  background: transparent;
  color: ${props => props.theme.color.primary};
}
&:focus {
  outline: none;
}
&:active {
  outline: none;
}
`;

const SpeechNext = ButtonTheme.extend`
  padding: 7px 12px;
  background: white;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.primary};
`;

const SpeechBack = ButtonTheme.extend`
  padding: 7px 12px;
  background: ${theme.grey};
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.primary};
`;

const SpeechCancel = ButtonTheme.extend`
  padding: 7px; 12px;
  background: ${theme.lightGrey};
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.primary};
`;

const SpeechHeading = styled.div`
  display: {props => props.isVisible ? 'flex' : 'none'};
  width:100%;
  align-items: center;
  justify-content: center;
`;

  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23c7bc9c' fill-opacity='0.22' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */

const CarboniteSpeech = () => (
  <div>Test Speech</div>
);
// const CarboniteSpeech = ({ children, text, title, onPressBack, onPressCancel, onPressNext }) => {
//   const controls = (
//       <SpeechControls isVisible={onPressCancel || onPressBack || onPressNext ? true : false}>
//         {onPressCancel ? <SpeechCancel /> : null}
//         {onPressBack ? <SpeechBack /> : null}
//         {onPressNext ? <SpeechNext /> : null}
//       </SpeechControls>
//   );
//   const heading = (
//     <SpeechHeading isVisible={title && true}>
//       <CarboniteText variant="white" bold size={10}>
//         {title}
//       </CarboniteText>
//     </SpeechHeading>
//   );
//   return (
//     <SpeechContainer>
//       {heading}
//       <Speech fillColour={'ece0c3'}>
//         {text}
//         {children && (
//           <span>{children}</span>
//         )}
//       </Speech>
//         {controls}
//     </SpeechContainer>
//   );
// }

export default CarboniteSpeech;
