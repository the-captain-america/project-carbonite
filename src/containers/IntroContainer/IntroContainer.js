import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { CarboniteText } from 'carbonite';
import { withRouter } from 'react-router-dom';
// import Cloud from './Cloud';
// const cloud = require('./cloud.svg');
// const cloud = require('./moveCloud.svg');
// import * as cloud from './cloud.svg';
const landscape = require('./landscape.jpg');
const trees = require('./tree.png');

const theme = {
	primary: '#ff7058',
  secondary: '#f1543f',
  tealLight: '#bad1b6',
  tealDark: '#b5ceb1',
  tealXDark: '#9cbc97',
};

const ToggleIn = () => {
  return keyframes`
	0% {
      transform: translateY(-150px);
      opacity: 0;
  }
	100% {
      transform: translateY(0px);
      opacity: 1;
	}
 `;
}

// const ToggleOut = () => {
//   return keyframes`
// 	0% {
//       transform: translateY(0px);
//       opacity: 1;
//   }
// 	100% {
//       transform: translateY(-150px);
//       opacity: 0;
// 	}
//  `;
// }

const CloudMoveInOne = () => {
  return keyframes`
	0% {
			transform: scale(1);
      /* left: -200px; */
      transform: translateX(-300px);
      opacity: 0;
	}
  10%{
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
		100% {
			transform: scale(1);
      transform: translateX(300px);
      /* left:200px; */
      opacity: 0;
		}
 `;
}

const CloudMoveInTwo = () => {
  return keyframes`
	0% {
			transform: scale(1);
      /* left: -200px; */
      transform: translateX(-700px);
      opacity: 0;
	}
  10%{
    opacity: 1;
  }
  90% {
      opacity: 1;
  }
	100% {
			transform: scale(1);
      transform: translateX(700px);
      /* left:200px; */
      opacity: 0;
	}
 `;
}

const CloudItem = styled.div`
background-repeat: no-repeat;
width: ${props => (props.item === "one") ? '400' : '250'}px;
height:100px;
z-index: 100;
top: 100px;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: forwards;
animation-duration: ${props => (props.item === "one") ? '20' : '30'}s;
animation-name: ${props => (props.item === "one") ? CloudMoveInOne : CloudMoveInTwo};
left: ${props => (props.item === "one") ? '70%' : '50%'};
right: 50%;
position: absolute;
border:none;
transition: transform .25s ease-in;
// transform: scale(.5);
/* ${props => (props.item === "one") && `
  transform: scale(0.5);
`};
${props => (props.item === 'two') && `
  transform: scale(1);
`}; */
`;


// const CloudItem = styled.img`
//   background-image: url(${cloud});
//   text-decoration: none;
//   background-repeat: no-repeat;
//   width: 200px;
//   height:100px;
//   transform: all 0.5s ease-in-out;
//   animation-timing-function: ease-in-out;
//   animation-iteration-count: infinite;
//   animation-direction: normal;
//   animation-fill-mode: forwards;
//   animation-duration: 10s;
//   animation-name: ${CloudMoveIn};
//   border:none;
// `;

const Skew = styled.div`
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: visible;
    width: 100%;
    height: 250px;
    background: ${theme.tealDark};
    z-index: -1;
    transform: skewY(-2deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: initial;
  }
`;

const Container = styled.div`
  position: fixed;
  left:0px;
  right:0px;
  background-color: ${theme.tealLight};
  width:100%;
  height: 100%;
  display: flex;
  //justify-content: flex-end;
  align-items: center;
`;

const Mountain = styled.img`
  /* overflow: hidden;
  background-image: url(${landscape});
  background-repeat: no-repeat;
  width: 1600px;
  height: 1000px;
  background-size: cover; */

  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
  //transform: scale(.75);
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

/*

  // opacity: 0;
  // animation: ${ToggleIn} 2s ease-in-out;
  // animation: ${ToggleIn} 2s ease-in-out;
  /* ${props => !props.isVisible && `
    animation: ${ToggleIn} 2s ease-in-out;
  `}

  In the example below
  "test" = animation-name,
  1s = animation-duration,
  2s = animation-delay,
  3 = animation-iteration-count.
  "alternate" = animation-direction
  "backwards" = animation-fill-mode
  Example:
  animation: test 1s 2s 3 alternate backwards

*/

const IntroButton = styled.button`
  /* animation-delay: 1s;
  animation-name: ${ToggleIn};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; */

  animation-timing-function: linear;
  animation: ${ToggleIn} 2s 1s 1 normal forwards;

  display: flex;
  height: 50px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  border:none;
  outline: none;
  padding: 10px 15px;
  z-index: 200;
  border-bottom: 2px solid ${theme.secondary};
  background-color: ${theme.primary};
  span {
    padding: 0px;
    line-height: 1.5;
  }
  &:hover {
    cursor:pointer;
    background-color: ${theme.secondary};
    color: ${props => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const TreeContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: -1px;
  left: 0px;
  height: 100px;
`;

const Trees = styled.div`
  position: fixed;
  bottom: -10px;
  display: flex;
  width:100%;
  height:300px;
  background-repeat: repeat-x;
  background-image: url(${trees});
  background-size: contain;
`;

const Section = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: center;
  padding:15px;
  border-radius: 4px;
  flex-direction: column;
  margin-bottom: 50px;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,0.10);
  background: white;
  border-bottom: 2px solid ${theme.tealXDark};
`;

const SidePanel = styled.div`
  position: fixed;
  right: -250px;
  width: 250px;
  height: 100%;
  background: ${theme.primary};
  box-shadow: 0 8px 20px 0 rgba(0,0,0,0.10);
  transition: translateX 0.5s ease-in-out;
  ${props => props.isOpen && `
    transform: translateX(-250px);
  `};
`;

class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isVisible: false,
    };
    this.handleStart = this.handleStart.bind(this);
  }

  // componentDidMount() {
  //   console.log('mounted intro');
  //   setTimeout(() => {
  //       console.log('event fired');
  //       this.setState({ isVisible: true });
  //     }, 3000);
  // }

  handleStart() {
    this.props.history.push("/journey");
  }

  render() {
    const renderCloud = (
      <svg
        className="cloud"
        viewBox="0 0 500 500"
      >
        <path fill="#dfdccb" d="M333,75h-4c-6-10-17-17-31-17l-13,2c-6-13-21-21-37-21a44,44,0,0,0-26,8c-3-11-14-20-28-20h-3V26c0-15-14-26-30-26s-21,5-26,13A45,45,0,0,0,102,1C79,1,60,18,60,38a32,32,0,0,0,0,3C41,42,25,55,21,71H20C9,71,0,78,0,88H349C349,81,342,75,333,75Z"/>
        <path fill="#d9d5c1" d="M277,88c-1-4-4-7-9-7h-1c-2-5-8-8-14-8h-5c-4-5-10-9-18-9h-4c-6-10-18-16-31-16a40,40,0,0,0-15,3h-3l-6,2a22,22,0,0,0-14-5h-3c-6-8-17-14-29-14S98,42,92,51H90c-9,0-16,6-16,14a12,12,0,0,0,0,3A19,19,0,0,0,62,78H60c-7,0-13,4-15,10Z"/>
      </svg>
    );

    // const generateRandom = (min, max) => {
    //   return Math.random() * (max - min) + min;
    // }

    return (
      <Container>
        <IntroSection>
          <Skew />

          {this.props.isOpen === false && (
            <div>
              <CloudItem item={'one'}>{renderCloud}</CloudItem>
              <CloudItem item={'two'}>{renderCloud}</CloudItem>
            </div>
          )}

          <SidePanel isOpen={this.state.isOpen}>
            <Section>
            <CarboniteText
                variant={'xLight'}
                size={14}
                fontCase={'lowercase'}
                family={'default'}
              >
                Your quest for truth begins here  <br />Sign up and start your journey
              </CarboniteText>
            </Section>
          </SidePanel>
          
            <IntroButton
              isVisible={this.state.isVisible}
              onClick={this.handleStart}>
              <CarboniteText
                variant={'white'}
                size={20}
                fontCase={'lowercase'}
                family={'primary'}
              >
                Start Journey
              </CarboniteText>
            </IntroButton>
            <div style={{display: 'none'}}><Mountain src={landscape} /></div>
        </IntroSection>
        <TreeContainer>
          <Trees />
        </TreeContainer>
      </Container>
    );
  }
}

export default withRouter(IntroContainer);
