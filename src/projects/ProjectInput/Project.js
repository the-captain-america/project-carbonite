import React, { Component } from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import HeaderBar from './HeaderBar';

const Container = styled.div`
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

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
    }
  }
  
  render() {
    return (
			<Container>
				<HeaderBar
					title={'React Input Following Clear Button'} 
					subtitle={'Created by Philip Hultgren'} />
					<SearchQuery />
			</Container>
    );
  }
}

export default Project;
