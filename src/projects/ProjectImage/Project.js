import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { Container, Row } from './styles';
// import {} from '../../components/carbonite';

class Project extends Component {
  render() {
    return (
			<Container>
				<HeaderBar
					title={'React Image Handling'} 
					subtitle={'Created by Philip Hultgren'} />
				<Row>
				<div>Insert Updated Component</div>
        </Row>
			</Container>
    );
  }
}

export default Project;
