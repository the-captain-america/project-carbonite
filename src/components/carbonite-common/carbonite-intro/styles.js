import styled, { keyframes } from 'styled-components';
import { media } from '../../../utils/StyleUtils';

const transitionIn = props => {
	return keyframes`
  from { 
		opacity: 0;
	}
  to {
    opacity: 1;
  }
  `;
};

const transitionOut = props => {
	return keyframes`
  from {
		opacity: 1;
	}
  to {
    opacity: 0;
  }
  `;
};

export const IntroContainer = styled.div`
	display: ${props => (props.isVisible ? "flex" : "none")};
	background: white;
`;

export const CarboniteContainer = styled.div`

`;

export const Intro = styled.div`
	border-radius: 4px;
	position: absolute;
	display: block;
	transition: all 0.2s ease-in-out;
	flex-direction: column;

	background: white;
	background-repeat: no-repeat;
	background-position: -20px 60px;
	background-size: 150px;
	background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'transparent'};
	right: ${props => props.positionX}px;
	top: ${props => props.positionY ? `${props.positionY}px` : '35px'};
	z-index: ${props => props.theme.zIndex.isVisible};

	${props => props.transition && `
		opacity: 0;
		animation-name: ${transitionIn(props)};
		animation-duration: ${props.transitionDuration}ms;
		animation-delay: ${props.transitionDelay}ms;
		animation-fill-mode: forwards;
		animation-timing-function: cubic-bezier(.3,0,.4,1);
	`}

	${props => !props.transition && `
		/* opacity: 0;
		animation-name: ${transitionOut(props)};
		animation-duration: ${props.transitionDuration}ms;
		animation-delay: ${props.transitionDelay}ms;
		animation-fill-mode: forwards;
		animation-timing-function: cubic-bezier(.3,0,.4,1); */
	`}

	
	&:before {
		content: "";
		position: absolute;
		transition: all 0.2s ease-in-out;
		top: -9px;
		right: ${props => (props.caretX ? `${props.caretX}px` : "35px")};
		width:0px;
		height:0px;
		border-width: 0px 10px 10px 10px;
		border-style: solid;
		border-color: transparent transparent #CB192C transparent;
	}

	${media.desktop`
		width:450px;
		box-shadow: ${props => props.theme.boxShadow.primary};
	`}


`;

export const NavStart = styled.div`
	display:flex;
	align-items: center;
	justify-content: flex-start;
	align-self: flex-start;
	${media.mobile`
		display: block;
		position:absolute;
  `};
	
`;

export const UpdateButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right:15px;
`;

export const CloseButton = styled.button`
	display: block;
	border: none;
	position: absolute;
	top:0px;
	right:0px;
	transition: all 0.2s linear;
	right: 0px;
	line-height:1.5;
	margin: 0 auto;
	cursor: pointer;
	padding: 12px 18px;
	background:none;
	outline: none;
	opacity: .5;

	${media.mobile`
		padding: 9px 13px;
	`};

&:hover {
	opacity: 1;
}
&:focus {
	outline: none;
}
align-self: flex-end;
`;

export const TitleSection = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding-top:12px;
padding-bottom:11px;
margin: 0 auto;
width:100%;

	${media.mobile`
		position: relative;
    top: 23px;
  `};
`;

export const ContentContainer = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:100%;
`;

export const HeaderSection = styled.div`
	background-color: ${props => props.theme.color.primary};
	${media.mobile`
		background: ${props => props.theme.color.white};
	`};

	width:100%;
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	display:flex;
	margin-bottom: 20px;
	justify-content: center;
	text-align: center;
	line-height: 1.5;
	align-items: center;
	color:white;
`;

export const ContentSection = styled.div`
	display:flex;
span {
	line-height:20px;
	text-align: center;
}
`;

export const Overlay = styled.div`
position: fixed;
z-index: ${props => props.theme.zIndex.overlay};
top:0px;
left:0px;
width:100%;
height:100%;
background: rgba(255,255,255, 0);
display: ${props => props.toggleOverlay === true ? 'block' : 'none'};
`;

export const Content = styled.div`
	padding-right: 20px;
	padding-left: 20px;
	padding-bottom:20px;
	display: flex;
	width:100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	span {
		display: flex;
		width:100%;
		justify-content: center;
	}
`;

export const HeadingSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom:20px;
	padding-top:10px;
`;

export const Navigation = styled.div`
display: flex;   
justify-content: space-between;
flex-direction: column;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom:10px;
	${media.mobile`
		flex-direction: column;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom:10px;
  `};
`;

export const Item = styled.div`
	text-align: center;
	display:flex;
	justify-content: flex-start;
	align-items: center;
	min-width: 20%;
`;

export const ItemCenter = styled.div`
	margin: 0 auto;
	align-self: center;
`;

export const IndicatorItem = styled.li`
  display: inline-block;
  margin-right: 5px;
	transition: all 0.2s linear;
	height: 6px;
	width: 6px;
	background: ${props => props.theme.color.primary};
	&:hover {
		background-color: ${props => props.theme.color.primary};
	}
  font-size: 8px;
  line-height: 30px;
  border-radius: 100%;
  text-align: center;
  text-indent: -9999px;
  cursor: pointer;
  transition: all 0.2s linear;

	&:last-child {
		margin-right: 0;
	}
	&.active-indicator {
		background-color: ${props => props.theme.color.primary};
		color: #fff !important;
	}
`;

export const TopRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	padding-bottom: 20px;
`;

export const BottomRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const IndicatorContainer = styled.div`
	width: 100%;
	position: relative;
	display:flex;
	align-items: center;
	flex-direction:row;
	justify-content: center;
`;

export const Indicators = styled.ul`
	z-index: 2 !important;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	top:0px;
	margin:0px;
	padding: 0px;

	${media.tablet`
		position: absolute;
		top: 25px;
  `};

	${media.desktop`
		position: relative;
		top: 25px;
  `};
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

export const ButtonLight = ButtonTheme.extend`
	border-radius: 100px;
	background: transparent;
	padding: 5px 15px 5px 15px;
	display:inline-block;
	&:hover {
		span {
			color: ${props => props.theme.color.primary};
		}
	}
`;

export const ButtonPrimary = ButtonTheme.extend`
	margin-left:10px;
	border-radius: 100px;
	padding: 4px 15px 5px 15px;
	background: ${props => props.theme.color.primary};
	&:hover {
		color: ${props => props.theme.color.white};
		background: ${props => props.theme.color.primary};
	}
`;