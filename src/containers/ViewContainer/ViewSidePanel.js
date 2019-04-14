import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { CarboniteIcon } from 'carbonite';
import BibleSearch from 'bible-search';

const bibleSearch = new BibleSearch('7O9KkGVWeNJqZXZ0EGGAytm9x4OfqrOA02uN1Yku');

const theme = {
	primary: '#ff7058',
  secondary: '#f1543f',
	control: '#faf5e6',
	controlBorder: '#ede2c1',
	sideControl: '#faf5e6',
	sideBorder: '#ede2c1',
  white: '#ffffff',
  underTone: '#ffcbb2',
	cloud: {
		primary: '#477ea8',
		secondary: '#9ecdf2',
		tertiary: '#c4e7fe',
		quaternary: '#d1effe'
	}
};

// const CloseButton = styled.button`
// display: inline-block;
// position: absolute;
// padding: 15px;
// border: none;
// background: ${props => props.theme.color.white};
// &:focus {
//   outline: none;
// }
// &:hover {
//   background: ${props => props.theme.color.white};
// }
//   background: red;
//   cursor: pointer;
//   padding: 0;
// `;

// const ButtonTheme = styled.button`
// height: 22px;
// display: flex;
// transition: all 0.2s ease-in-out;
// text-transform: uppercase;
// justify-content: center;
// vertical-align: middle;
// align-items: center;
// cursor: pointer;
// border:none;
// outline: none;
// span {
//   padding: 0px;
//   line-height: 1.5;
// }
// &:hover {
//   cursor:pointer;
//   background: transparent;
//   color: ${props => props.theme.color.primary};
// }
// &:focus {
//   outline: none;
// }
// &:active {
//   outline: none;
// }
// `;

// const ViewSideButton = ButtonTheme.extend`
// position: absolute;
// text-align: center;
// color: white;
// left: -40px;
// top:50px;
// height: 50px;
// background: ${theme.primary};
// border-top: 1px solid ${theme.secondary};
// border-left: 1px solid ${theme.secondary};
// border-bottom: 1px solid ${theme.secondary};
// border-top-left-radius: 4px;
// border-top-right-radius: 4px;
// &:hover {
//   background: ${theme.secondary}
// }
// `;

// const ViewSidePanel = styled.div`
// position: fixed;
// box-shadow: none;
// display: flex;
// z-index: ${props => props.zIndex};
// align-items: center;
// justify-content: center;
// top: 0px;
// right: 0px;
// width:250px;
// height: 100%;
// box-shadow: ${props => props.theme.shadow.secondary};
// animation-duration: .3s;
// animation-fill-mode: forwards;
// animation-timing-function: ease-in-out; */

// ${props => props.isActive && `
//   animation-name: ${openSidePanel};
//   animation-duration: .3s;
//   animation-delay: 0;
//   animation-fill-mode: forwards;
//   animation-timing-function: ease-in-out;
// `}

// ${props => !props.isActive && `
//   animation-name: ${closeSidePanel};
//   animation-duration: .3s;
//   animation-delay: 0;
//   animation-fill-mode: forwards;
//   animation-timing-function: ease-in-out;
// `}

// background-color: #ffffff;
// background-image: url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23${props => props.fillColour}' fill-opacity='0.22' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// border-left: 2px solid ${theme.controlBorder};
// background-color: ${theme.control};

// `;

// const ViewSideTop = styled.div`
// display: flex;
// align-self: center;
// align-items: center;
// justify-content: space-around;
// `;

// const BackButton = styled.button`
// display: inline-block;
// position: absolute;
// padding: 15px;
// border: none;
// background: ${props => props.theme.color.white};
// &:focus {
//   outline: none;
// }
// &:hover {
//   background: ${props => props.theme.color.white};
// }
//   background: red;
//   cursor: pointer;
//   padding: 0;
// `;


const ToggleOn = () => {
  return keyframes`
	0% {
    right: -252px;
  }
  100% {
    right: 0px;
  }
 `
};

const ToggleOff = () => {
  return keyframes`
	0% {
    right: 0px;
  }
  100% {
    right: -252px;
  }
`
};

const SidePanelContainer = styled.div`
  width:250px;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0px;
  right: -252px;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,0.25);
  cursor: pointer;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-duration: .25s;

	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23c7bc9c' fill-opacity='0.22' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	border-left: 2px solid ${theme.controlBorder};
	background-color: ${theme.control};
  &.-inactive {
    /* background-color: ${theme.primary}; */
    animation-name: ${ToggleOff};
  }
  &.-active {
    /* background-color: ${theme.secondary}; */
    animation-name: ${ToggleOn};
  }
`;


const SidePanelButton = styled.button`
  padding:5px 7px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  text-decoration:none;
  position: absolute;
  height:50px;
  width: 42px;
  left: -42px;
  top: 100px;
  color: white;
  background: ${props => props.theme.color.primary};
  transition: all 0.2s ease-in-out;
  border: 0;
  border-bottom: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.secondary};
    cursor: pointer;
  }
  &:active {
    background: ${props => props.theme.color.secondary};
    border-width:2px;
  }
  &:focus {
    outline: 0;
  }
`;

class ViewSidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.handleSide = this.handleSide.bind(this);
  }

  handleSide() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    bibleSearch.passage.getPassage({
      book: 'rev',
      chapter: 21,
      start: 4
    }).then(function (data) {
      //JSON Structure see: https://pt-br.bibles.org/pages/api/documentation/passages 
    }).catch(function (err) {
      console.log('Ops! Sorry :|');
    });
    // bibleSearch.passage.getPassage({
    //   book: 'rev',
    //   chapter: 21,
    //   start: 4
    // }).then(function (data) {
    //   console.log(data);
    // }).catch(function (err) {
    //   console.log('Ops! Sorry :|');
    // });
  }

  render() {
    let className;
    if (this.state.isOpen) {
      className = ' -active';
    } else {
      className = ' -inactive';
    }
    return (
      <SidePanelContainer className={className} isOpen={this.state.isOpen}>
        <SidePanelButton onClick={this.handleSide}>
          <CarboniteIcon size={30} name={'book'} />
        </SidePanelButton>
        {this.props.children}
      </SidePanelContainer>
    );
  }
}

export default ViewSidePanel;