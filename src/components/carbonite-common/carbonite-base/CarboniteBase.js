import styled from 'styled-components';
// import { media } from 'style-utils';

export const BaseButton = styled.button`
	padding:15px 7px;
	text-decoration:none;
	border: none;
	display: flex;
	align-self: center;
	color: white;
	background: ${props => props.bgColor ? props.theme.color[props.bgColor] : props.theme.color.primary};
	outline: none;
	cursor: pointer;
	&:hover {
		background: ${props => props.bgHover ? props.theme.color[props.bgHover] : props.theme.color.primary};
		cursor: pointer;
	}
	&:active {
		background: ${props => props.bgHover ? props.theme.color[props.bgHover] : props.theme.color.primary};
	}
	&:focus {
		outline: 0;
	}
`;

export const Container = styled.div`

  padding: 0 0px;
  max-width: 100%;
  margin: 0 auto;
  width: ${props => props.wide && '80%'};
`;


  /* ${media.desktop`
    width: 960px;
  `}

  ${media.screen`
    width: 960px;
    padding: 0 0px;
  `} */
