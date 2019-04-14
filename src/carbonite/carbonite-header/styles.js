import styled from 'styled-components';

const Header = styled.header`
	top: ${props => props.isOpen ? '0' : '-50'}px;
	align-items: center;
	justify-content: center;
	display: flex;
	left:0px;
	color: #fff;
	padding: 10px;
	position:fixed;
	width:100%;
	z-index:999;
	height:20px;
	text-align: center;
	background: ${props => props.theme.color.primary};
	border-bottom:2px solid ${props => props.theme.color.secondary};
	transition: all 0.4s ease-in-out;
	&:hover {
		.close {
			opacity: .7;
		}
	}
	/* .close-container {
		justify-content: flex-end;
	} */
`;

const CloseContainer = styled.div`
	/* display: flex;
	align-items:center;
	float:right; */
	right: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width:90px;
`;

// const ToolContainer = styled.div`
//   position: relative;
//   display: flex;

// `;

const Tip = styled.div`
	display: none;
	width: 125px;
	height: 50px;
	position: absolute;
	top: -50px;
	left: 50%;
	border-radius: 3px;
	background-color: #333;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 11px;
	line-height: 50px;
	color: #FFF;
	text-align: center;
	transform: translateX(-50%) scale(0);
	transform-origin: bottom center;
	transition: all 0.4s cubic-bezier(1, 0, 0.4, 1);

	&:after {
		width: 0; 
		height: 0; 
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #333;
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		top: -10px;
		transform: translateX(-50%);
	}
`;


const HeaderClose = styled.button`
	padding:10px;
	transition: all 0.4s ease-in-out;
	opacity: 0;
	position:relative;
	display: block;
	right:0px;
	cursor:pointer;
	border-radius:50%;
	background: none;
	border: 0;
	&:focus {
		outline: none;
	}
	/* &:hover {
	} */
	&:hover {
		opacity: 1;
		.tool-tip { 
			top: -70px;
			transition: all 0.4s cubic-bezier(1, 0, 0.4, 1.7);
			transform: translateX(-50%) scale(1); 
		}
  }
`;

const HeaderTitle = styled.div`
	// text-transform:uppercase;
	// font-size: 120%;
	// color:white;
	// font-weight:bold;
`;

const HeaderSubtitle = styled.div`
	text-align:center;
	font-size:12px;
	text-decoration:none;
	padding-bottom:10px;
`;

const HeaderButton = styled.button`
	position:absolute;
	display: ${props => props.status ? 'flex' : 'none'};
	right:30px;
	top:10px;
	padding:10px 15px;
	cursor:pointer;
	border-radius:3px;
	background: ${props => props.theme.color.primary};
	border: 1px solid ${props => props.theme.color.secondary};
	&:focus {
		outline: none;
	}
	span{
		position:relative;
		font-size:15px;
		text-transform:uppercase;
		top:0px;
		color:white;
	}
	border: 1px solid ${props => props.theme.color.secondary};
	&:hover {
		background: ${props => props.theme.color.secondary};
	}
`;


export { Header, HeaderButton, HeaderSubtitle, HeaderTitle, HeaderClose, CloseContainer, Tip };