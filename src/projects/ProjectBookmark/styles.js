
import styled, { css } from 'styled-components';
import theme from './theme';

export const Container = styled.div`
	width:100%;
	display:flex;
	position:fixed;
	background: #efefef;
	top:50px;
	left:0px;
	justify-content: center;
	align-self: center;
	flex-direction:column;
	height:80px;
	border-bottom:1px solid #b3b3b3;
`;

export const aspectRatio = (time, effect) => css`
transition:           all ${time} ${effect};
-webkit-transition:   all ${time} ${effect};
-moz-transition:      all ${time} ${effect};
-o-transition:        all ${time} ${effect};
-ms-transition:       all ${time} ${effect};
`;

export const Header = styled.header`
top:0px;
left:0px;
position:fixed;
overflow:hidden;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
background-color: ${theme.color.primary};
color: #fff;
width:100%;
font-family:'gillsans';
z-index: ${theme.zIndex.header};
height:50px;
text-align: center;
border-bottom: 3px solid ${theme.color.secondary};
> .title {
	text-transform:uppercase;
	font-size: 120%;
	color:white;
	font-weight:bold;
}
.subtitle{
	text-align:center;
	font-size:12px;
	text-decoration:none;
}
`;

export const Row = styled.div`
display:flex;
width:100%;
flex-direction: row;
padding-top:7px;
padding-bottom:7px;
margin-top:7px;
position: relative;
justify-content: flex-end;
align-items: center;
`;

export const IncrementButton = styled.button`
padding:15px 10px;
text-decoration:none;
color:white;
border: none;
border-radius: 4px;
display: flex;
align-self: center;
color: white;
background: #cb192c;
transition: all 0.2s ease-in-out;
outline: none;
border-bottom:4px solid #af1728;
border-radius:2px;
transition: background-color 250ms ease-out;
position:absolute;
top: 0px;
cursor: pointer;
&:hover {
	background: #af1728;
	cursor: pointer;
}
&:active {
	background:#cb192c;
	border-width:2px;
	top:2px;
}

&:focus {
	outline: 0;
}
`;