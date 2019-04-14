import React, { Component } from 'react';
import { CarboniteText, CarboniteIcon } from 'carbonite';
import styled, { keyframes } from 'styled-components';
import { CarboniteOverlay } from 'carbonite';
import Grid from 'styled-components-grid';
// import Breakpoint from 'breakpoints';
// import { media } from 'helpers';

const char0 = require('./characters/char0.png');
const char1 = require('./characters/char1.png');
const char2 = require('./characters/char2.png');
const char3 = require('./characters/char3.png');
const char4 = require('./characters/char4.png');
const lock = require('./characters/lock.png');
const banner = require('./characters/banner.png');

const theme = {
	primary: '#ff7058',
  secondary: '#f1543f',
	control: '#faf5e6',
	controlBorder: '#ede2c1',
	sideControl: '#faf5e6',
	sideBorder: '#ede2c1',
  white: '#ffffff',
  underTone: '#ffcbb2',
  darkBrown: '#24100c',
  lightBrown: '#402917',
  lightTan: '#bd8156',
  darkTan: '#754f32',
  tan: '#d8c8a7',
	cloud: {
		primary: '#477ea8',
		secondary: '#9ecdf2',
		tertiary: '#c4e7fe',
		quaternary: '#d1effe'
	}
};

const OpenIn = () => {
  return keyframes`
	0% {
			transform: scale(0);
      /* left: -200px; */
      transform: translateY(-1000px);
      opacity: 0;
	}
	100% {
			transform: scale(1);
      transform: translateY(0px);
      /* left:200px; */
      opacity: 1;
	}
 `;
}

const Container = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: center;
`;

const CreateClose = styled.button`
  display: flex;
  height: 40px;
  position: absolute;
  right: 15px;
  top: -40px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: ${theme.primary};
  width: 60px;
  border: none;
  border-left: 2px solid ${theme.secondary};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  outline: none;
  z-index: 200;
  &:hover {
    cursor:pointer;
    background-color: ${theme.secondary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  span {
    margin: 0 auto;
  }
`;

const Create = styled.div`
  position: relative;
  z-index: 400;
  overflow: hidden;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  ${props => props.isOpen && `
    animation: ${OpenIn} .25s ease-in;
  `}

  margin-top: 100px;
  box-shadow: 0px 0px 14px 6px rgba(0,0,0,0.10);
  background-color: ${theme.tan};
  // border: 2px solid ${theme.lightBrown};
  padding:15px;

  background-size: cover;
  width:600px;
  background-repeat: no-repeat;
  // border-radius: 4px;
  min-height: 400px;
  // border-radius: 5px 0 5px 5px;
  border-radius: 4px;
/* &:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 16px 16px 0;
  border-style: solid;
  border-color: #fff #fff #658E15 #658E15;
  background: #658E15;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
  display: block; width: 0;
  border-width: 8px;
  border-color: #fff #fff transparent transparent;
  -moz-border-radius: 0 0 0 5px;
  border-radius: 0 0 0 5px;
} */
`;

const SelectedItem = styled.div`
  padding: 10px;
  // border: 2px solid ${theme.lightBrown};
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
    z-index: 300;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    opacity: 0;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  width: 250px;
  img {
    width: 100%;
   // padding: 15px;
  }
`;

const CreateList = styled.div`
padding:0px;
margin: 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width:100%;
list-style: none;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
    z-index: 300;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    img {
      width: 50px;
      height: 60px;
    }
  }
  span.character-title {
    text-align: center;
    display: none;
    background-color: ${theme.tan};
    width:100%;
  }

  height:150px;
  padding:0px;
  margin: 15px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
    z-index: 9999;
    .selectOption {
      opacity: 1;
      bottom: -20px;
    }
  }
  .selectOption {
    opacity: 0;
  }
  border: 2px solid ${theme.lightBrown};
  background: ${theme.tan};
  border-radius: 3px;
  img{
    height:100px;
  }
`;

const SelectOption = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: -70px;
    display: flex;
    align-itmes: center;
    transition: all .15s ease-in-out;
    justify-content: center;
`;

const CreateListPanel = styled.div`
  transition: all .25s ease-in-out;
  opacity: 0;
  width: 400px;
  top: 0px;
  height: 400px;
  overflow-y: scroll;
  position: absolute;
  border-left: 2px solid ${theme.darkBrown};
  right: -400px;
  background-color: ${theme.lightBrown};

  ${props => props.isListOpen && `
    right: 0px;
    opacity: 1;
  `}
`;

const SelectButton = styled.button`
  background-color: ${theme.darkBrown};
  border: none;
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 30px;
  color: white;
  text-align: center;
  &:hover{
    background-color: ${theme.lightBrown};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const CreateHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:30px;
  top: 50px;
  left: 25px;
  width: 250px;
  position: absolute;
  z-index:400;
  img {
    width: 100%;
  }
`;
const CreateControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;
const CreateSave = styled.button`
  width: 120px;
  height: 30px;
  color: white;
  background-color: ${theme.primary};
  border: none;
  border-left: 2px solid ${theme.secondary};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  outline: none;
  z-index: 200;
  &:hover {
    cursor:pointer;
    background-color: ${theme.secondary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;
const CreateCancel = styled.button`
  width: 120px;
  height: 30px;
  color: white;
  background-color: ${theme.primary};
  border: none;
  border-left: 2px solid ${theme.secondary};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  justify-content: flex-end;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  outline: none;
  z-index: 200;
  &:hover {
    cursor:pointer;
    background-color: ${theme.secondary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const ListControls = styled.div`
`;

class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      selected: '',
      isListOpen: false,
      items: [
        {
          id: 0,
          unlocked: true,
          character: char0,
          name: 'Jeremiah'
        },
        {
          id: 1,
          unlocked: true,
          character: char1,
          name: 'John'
        },
        {
          id: 2,
          unlocked: true,
          character: char2,
          name: 'David'
        },
        {
          id: 3,
          unlocked: true,
          character: char3,
          name: 'David'
        },
        {
          id: 4,
          unlocked: true,
          character: char4,
          name: 'David'
        },
        {
          id: 5,
          unlocked: false,
          character: char4,
          name: 'Unlock'
        },
        {
          id: 6,
          unlocked: false,
          character: char4,
          name: 'Unlock'
        },
        {
          id: 7,
          unlocked: false,
          character: char4,
          name: 'Unlock'
        },
        {
          id: 8,
          unlocked: false,
          character: char4,
          name: 'Unlock'
        }
      ],
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePanel = this.handlePanel.bind(this);
  }

  handleClose() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handlePanel() {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }

  handleSelect(item) {
    this.setState({
      selected: item.character,
    });
  }

  render() {
    const createList = (
      <CreateList>
        <Grid style={{ marginRight: '10px'}}>
          {this.state.items.map((item, index) => (
            <Grid.Unit key={item.id} size={1/3}>
              <Item onClick={() => this.handleSelect(item)}>
                {item.unlocked === false && (
                  <div className="overlay">
                    <img src={lock} alt="lock" />
                  </div>
                )}
                <span className="character-title">
                  <CarboniteText variant="lightBrown" family="default" size={14}>
                      {item.name}
                  </CarboniteText>
                </span>
                
                {item.unlocked ? (
                  <img src={item.character} alt="character" />
                ) : (
                  <img style={{ opacity: 0 }} src={item.character} alt="hidden" />
                )}
                {item.unlocked && (
                <SelectOption className="selectOption">
                  <SelectButton>
                    Select
                    <CarboniteIcon
                      variant="white"
                      name="add"
                      size={30}
                    />
                  </SelectButton>
                </SelectOption>
                )}
              </Item>
            </Grid.Unit>
          ))}
        </Grid>
      </CreateList>
    );
    return (
      <Container>
        <Create isOpen={this.state.isOpen}>
          <CreateHeading>
            <img src={banner} alt="title" />
          </CreateHeading>
          <CreateClose onClick={this.handleClose}>
            <CarboniteIcon
              variant="white"
              name="close"
              left={10}
              top={0}
              size={30}
            />
          </CreateClose>
            <SelectedItem onClick={this.handlePanel}>
              <div className="overlay"></div>
              {this.state.selected ? (
                <img src={this.state.selected} alt="selected" />
              ) : (
                <img src={'http://via.placeholder.com/100x200'} alt="placeholder" />
              )}
            </SelectedItem>
            <CreateListPanel isListOpen={this.state.isListOpen}>
              <ListControls>
                
              </ListControls>
              {createList}
            </CreateListPanel>
        <CreateControls>
          <CreateSave onClick={this.handleClose}>
            Save
          </CreateSave>
          <CreateCancel onClick={this.handleClose}>
            Cancel
          </CreateCancel>
        </CreateControls>
        </Create>
        <CarboniteOverlay
          status={this.state.isOpen}
          zIndex={300}
          onPress={this.handleClose} />
      </Container>
    );
  }
}

export default CreateContainer;
