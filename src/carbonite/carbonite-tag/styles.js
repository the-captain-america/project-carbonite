import styled, { keyframes } from 'styled-components';

export const theme = {
  primary: '#CB192C',
  secondary: '#af1728',
  light: '#c7c7c7',
  dark: '#959595',
  base1: '#353535',
  base2: '#F4F4F4',
  base3: '#D8D8D8',
  base4: '#9E9E9E',
  border: '#e6e6e6',
  white: '#ffffff'
};

export const GroupList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0;
  width: 100%;
`;

export const List = styled.li`
  margin-bottom: 10px;
`;

export const InputBox = styled.input`
   &:focus {
    outline: none;
    border-bottom: solid 2px ${theme.primary};
   }
   border-top-right-radius: 3px;
   border-top-left-radius: 3px;
   width: 100%;
   padding: 10px;
   border: none;
   border-bottom: solid 2px ${theme.primary};
   transition: border 0.3s;
   &::input-placeholder {
     color:#999;
   }
`;

export const ButtonSubmit = styled.button`
  color: white;
  float:right;
  border:none;
  cursor: pointer;
  border-radius: 3px;
  padding: 5px 10px;
  border-bottom: 3px solid ${theme.secondary};
  background-color:${theme.primary};
  &:focus {
    outline: none;
  }
  &:hover{
    background-color:${theme.secondary};
  }
`;

export const Container = styled.div`
  width:100%;
  padding: 0px;
  margin: 0px;
  * {
    box-sizing: border-box;
  }
`;

export const Row = styled.div`
  display:flex;
  width:100%;
  padding-top:7px;
  padding-bottom:7px;
  margin-top:7px;
  margin: 0 auto;
  position: relative;
  border-radius: 3px;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
`;

export const Header = styled.div`
  position: fixed;
  top: 0px;
  left:0px;
  width: 100%;
  color: white;
  font-size:16px;
  font-weight: light;
  text-transform: uppercase;
  border-bottom:3px solid ${theme.secondary};
  background: ${theme.primary};
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
`;

export const baseTag = styled.div`
  padding: 12px 7px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  margin-top: 0px;
  display: flex;
  vertical-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

export const ClosingTodayContainer = baseTag.extend`
  border: 0;
  background-color: ${theme.base2};
  color: ${theme.primary};
  background: ${theme.base2};
  height: 14px;
  ${props => (props.display === false) && `
    display: none;
  `};
  &:hover {
		background: ${theme.border};
	}
`;

export const GoingGoneContainer = baseTag.extend`
  border: 0;
  background: ${theme.primary};
  color: ${theme.white};
  height: 14px;
  ${props => (props.display === false) && `
    display: none;
  `};
  &:hover {
		background: ${theme.primary};
	}
`;

export const EndingSoonContainer = baseTag.extend`
  border: 1px solid ${theme.primary};
  background: ${theme.white};
  color: ${theme.primary};
  height: 14px;
  ${props => (props.display === false) && `
    display: none;
  `};
  &:hover {
		background: ${theme.primary};
    color: ${theme.white};
	}
`;

export const NationDeliveryContainer = baseTag.extend`
  border: 0;
  background: ${theme.base2};
  color: ${theme.base1};
  height: 14px;
  ${props => (props.display === false) && `
    display: none;
  `};
  &:hover {
		background: ${theme.border};
	}
`;

export const ToolTip = styled.div`
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
    bottom: -10px;
    transform: translateX(-50%);
  }
`;

export const SectionCreate = styled.section`
  padding: 25px;
  width:400px;
  background: white;
  border-radius: 4px;
  position: relative;
  box-shadow: 3px 0px 15px 3px rgba(0, 0, 0, 0.14);
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 14px;
    text-align: left;
  }
  > p {
    text-align: left;
  }
`;

export const TagContainer = styled.div`
margin: 0px 4px 6px 0px;
position: relative;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
	&:hover {
	.tool-tip { 
			top: -70px;
			transition: all 0.4s cubic-bezier(1, 0, 0.4, 1.7);
			transform: translateX(-50%) scale(1); 
		}
	}
`;